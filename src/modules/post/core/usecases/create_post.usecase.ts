import { Injectable } from '@nestjs/common';
import { IPostRepo } from '../repositories/post.irepo';
import { PostModel, PostModelParams } from '../models/post.model';

@Injectable()
export class CreatePostUsecase {
  constructor(private readonly postIRepo: IPostRepo) {}

  public async execute(params: Partial<PostModelParams>): Promise<PostModel> {
    return await this.postIRepo.create(params);
  }
}
