import {init} from '@seams/server';
import PostsController from './src/controllers/Posts';
init({
    controllers: [
        PostsController
    ]
})