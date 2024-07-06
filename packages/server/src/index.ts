import { Elysia } from "elysia";
import { Delete, Get, Patch, Post, Put, routes } from "./decorators/routes";

const app = new Elysia();
export function init(config: any) {
  config.controllers.forEach(c => {
    new c();
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