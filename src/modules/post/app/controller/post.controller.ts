import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePostDto } from '../dtos/create_post.dto';
import { CreatePostUsecase } from '../../core/usecases/create_post.usecase';
import { SwaggerApi } from 'src/decorators';
import { ListPostsUsecase } from '../../core/usecases/list_posts.usecase';
import { GetPostUsecase } from '../../core/usecases/get_post.usecase';
import { UpdatePostDto } from '../dtos/update_post.dto';
import { UpdatePostUsecase } from '../../core/usecases';

@Controller('api/posts/v1')
export class PostController {
  constructor(
    private readonly createPostUsecase: CreatePostUsecase,
    private readonly getListPostUsecase: ListPostsUsecase,
    private readonly getPost: GetPostUsecase,
    private readonly updatePostUsecase: UpdatePostUsecase,
  ) {}

  @SwaggerApi({ secure: false })
  @Post('/')
  async createPost(@Body() body: CreatePostDto) {
    const post = await this.createPostUsecase.execute(body);
    return post;
  }

  @SwaggerApi({})
  @Get('/')
  async getAllPosts() {
    const posts = await this.getListPostUsecase.execute();
    return posts;
  }

  @SwaggerApi({})
  @Get('/:id')
  async getPostById(@Param('id') id: number) {
    const post = await this.getPost.execute(id);
    return post;
  }

  @SwaggerApi({})
  @Patch('/:id')
  async updatePost(@Param('id') id: number, @Body() body: UpdatePostDto) {
    const post = await this.updatePostUsecase.execute(id, body);
    return post;
  }
}
