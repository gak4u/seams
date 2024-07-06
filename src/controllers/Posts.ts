import { Get } from "@seams/server";

class PostsController{
    @Get('/hello')
    public sayHello(params:any): any {
        return "Hello World";
    }
}

export default PostsController;