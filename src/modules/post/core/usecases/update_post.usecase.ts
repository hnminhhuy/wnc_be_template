import { Injectable } from '@nestjs/common';
import { PostModel, PostModelParams } from '../models/post.model';
import { IPostRepo } from '../repositories/post.irepo';

@Injectable()
export class UpdatePostUsecase {
  constructor(private readonly postRepo: IPostRepo) {}

  public async execute(id: number, params: Partial<PostModelParams>): Promise<PostModel> {
    return this.postRepo.update(id, params);
  }
}
