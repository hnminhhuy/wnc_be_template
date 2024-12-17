import { Injectable } from '@nestjs/common';
import { IPostRepo } from '../repositories/post.irepo';

@Injectable()
export class ListPostsUsecase {
  constructor(private readonly postRepo: IPostRepo) {}

  public async execute(): Promise<any[]> {
    return this.postRepo.findAll();
  }
}
