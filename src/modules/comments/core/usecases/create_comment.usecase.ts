import { Injectable } from '@nestjs/common';
import { ICommentRepo } from '../repositories/comment.irepo';
import { CommentModelParams } from '../models/comment.model';

@Injectable()
export class CreateCommentUsecase {
  constructor(private readonly commentRepo: ICommentRepo) {}

  public async execute(params: Partial<CommentModelParams>) {
    return this.commentRepo.create(params);
  }
}
