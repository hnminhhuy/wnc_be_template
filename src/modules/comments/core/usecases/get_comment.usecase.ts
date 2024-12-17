import { ICommentRepo } from '../repositories/comment.irepo';

export class GetCommentUsecase {
  constructor(private readonly commentRepo: ICommentRepo) {}

  public async execute(id: number) {
    return this.commentRepo.get(id);
  }
}
