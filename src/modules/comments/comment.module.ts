import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './infra/data/entities/comment.entity';
import { ICommentRepo } from './core/repositories/comment.irepo';
import { CommentRepo } from './infra/data/repositories/comment.repo';
import { CommentDatasource } from './infra/data/comment.datasource';
import { CreateCommentUsecase, GetCommentUsecase, GetListCommentsUsecase } from './core/usecases';
import { CommentController } from './app/controller/comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentController],
  providers: [
    {
      provide: ICommentRepo,
      useClass: CommentRepo,
    },
    CommentDatasource,
    CreateCommentUsecase,
    GetListCommentsUsecase,
    GetCommentUsecase,
  ],
  exports: [],
})
export class CommentModule {}
