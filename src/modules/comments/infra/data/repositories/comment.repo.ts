import { Injectable } from '@nestjs/common';
import { CommentModelParams, CommentModel } from 'src/modules/comments/core/models/comment.model';
import { ICommentRepo } from 'src/modules/comments/core/repositories/comment.irepo';
import { CommentDatasource } from '../comment.datasource';

@Injectable()
export class CommentRepo implements ICommentRepo {
  constructor(private commentDatasource: CommentDatasource) {}

  public create(params: Partial<CommentModelParams>): Promise<CommentModel> {
    return this.commentDatasource.create(params);
  }
  public getList(postId: number): Promise<CommentModel[]> {
    return this.commentDatasource.getList(postId);
  }
  public get(id: number): Promise<CommentModel | undefined> {
    return this.commentDatasource.get(id);
  }
}
