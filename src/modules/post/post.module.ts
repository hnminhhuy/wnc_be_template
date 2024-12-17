import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './infra/data/entities/post.entity';
import { PostController } from './app/controller/post.controller';
import { IPostRepo } from './core/repositories/post.irepo';
import { PostRepo } from './infra/data/repositories/post.repo';
import { CreatePostUsecase } from './core/usecases/create_post.usecase';
import { ListPostsUsecase } from './core/usecases/list_posts.usecase';
import { GetPostUsecase } from './core/usecases/get_post.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [
    {
      provide: IPostRepo,
      useClass: PostRepo,
    },
    CreatePostUsecase,
    ListPostsUsecase,
    GetPostUsecase,
  ],
  exports: [],
})
export class PostModule {}
