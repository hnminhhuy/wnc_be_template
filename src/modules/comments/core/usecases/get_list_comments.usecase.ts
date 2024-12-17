import { Injectable } from '@nestjs/common';
import { ICommentRepo } from '../repositories/comment.irepo';

@Injectable()
export class GetListCommentsUsecase {
  constructor(private readonly commentRepo: ICommentRepo) {}

  public async execute(post_id: number) {
    return this.commentRepo.getList(post_id);
  }
}
