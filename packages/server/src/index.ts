import { Elysia } from "elysia";
import { Delete, Get, Patch, Post, Put, routes } from "./decorators/routes";
import { staticPlugin } from '@elysiajs/static'
import path from 'path';
import fs from 'fs';

const app = new Elysia();

app.get('*', async (req) => {
  try {
    const filePath = path.resolve(__dirname, '../../../public', req.path === '/' ? 'index.html' : req.path.substring(1));
    const data = fs.readFileSync(filePath);
    const ext = path.extname(filePath).substring(1);
    const contentType = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
    }[ext] || 'application/octet-stream';

    return new Response(data, { headers: { 'Content-Type': contentType } });
  } catch (err) {
    return new Response('Not Found', { status: 404 });
  }
});
export function init(config: any) {
  config.controllers.forEach(controller => {
    new controller();
  });
  routes.forEach((route) => {
    switch (route.method) {
      case 'get':
        app.get(route.path, (req) => {
          return route.handler(req);
        });
        break;
      case 'post':
        app.post(route.path, (req) => {
          return route.handler(req);
        });
        break;
      case 'put':
        app.put(route.path, (req) => {
          return route.handler(req);
        });
        break;
      case 'delete':
        app.delete(route.path, (req) => {
          return route.handler(req);
        });
        break;
      case 'patch':
        app.patch(route.path, (req) => {
          return route.handler(req);
        });
        break;
      default:
        throw new Error(`Unsupported method: ${route.method}`);
    }
  });
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}



export * from "./decorators/routes";