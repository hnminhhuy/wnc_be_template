import { Injectable } from '@nestjs/common';
import { IPostRepo } from '../repositories/post.irepo';

@Injectable()
export class GetPostUsecase {
  constructor(private readonly postRepo: IPostRepo) {}

  public async execute(id: number): Promise<any> {
    return await this.postRepo.findById(id);
  }
}
