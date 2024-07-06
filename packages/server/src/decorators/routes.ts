
interface RouteDefinition {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    handler: Function;
  }
  
  export const routes: RouteDefinition[] = [];
  
  function Route(method: 'get' | 'post' | 'put' | 'delete' | 'patch', path: string): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
      routes.push({
        path,
        method,
        handler: descriptor.value as Function,
      });
    };
  }
  
  export function Get(path: string): MethodDecorator {
    return Route('get', path);
  }
  
  export function Post(path: string): MethodDecorator {
    return Route('post', path);
  }
  
  export function Put(path: string): MethodDecorator {
    return Route('put', path);
  }
  
  export function Delete(path: string): MethodDecorator {
    return Route('delete', path);
  }
  
  export function Patch(path: string): MethodDecorator {
    return Route('patch', path);
  }
  