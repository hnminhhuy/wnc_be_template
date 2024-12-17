import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './infra/data/entities/post.entity';
import { PostController } from './app/controller/post.controller';
import { IPostRepo } from './core/repositories/post.irepo';
import { PostRepo } from './infra/data/repositories/post.repo';
import { PostDatasource } from './infra/data/post.datasource';
import { CreatePostUsecase, GetPostUsecase, ListPostsUsecase, UpdatePostUsecase } from './core/usecases';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [
    {
      provide: IPostRepo,
      useClass: PostRepo,
    },
    PostDatasource,
    CreatePostUsecase,
    ListPostsUsecase,
    GetPostUsecase,
    UpdatePostUsecase,
  ],
  exports: [],
})
export class PostModule {}
