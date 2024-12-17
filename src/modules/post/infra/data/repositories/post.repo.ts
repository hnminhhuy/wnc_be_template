import { Injectable } from '@nestjs/common';
import { IPostRepo } from 'src/modules/post/core/repositories/post.irepo';
import { PostDatasource } from '../post.datasource';
import { PostModel, PostModelParams } from 'src/modules/post/core/models/post.model';

@Injectable()
export class PostRepo implements IPostRepo {
  constructor(private readonly postDatasource: PostDatasource) {}

  public async create(params: Partial<PostModelParams>): Promise<PostModel> {
    return this.postDatasource.create(params);
  }
  public async findAll(): Promise<PostModel[]> {
    return this.postDatasource.findAll();
  }
  public async findById(id: number): Promise<PostModel | undefined> {
    return this.postDatasource.findById(id);
  }
}
