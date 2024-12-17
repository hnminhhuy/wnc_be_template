import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { PostModel, PostModelParams } from '../../core/models/post.model';

@Injectable()
export class PostDatasource {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postDatasource: Repository<PostEntity>,
  ) {}

  public async create(params: Partial<PostModelParams>): Promise<PostModel> {
    const post = this.postDatasource.create(params);
    await this.postDatasource.insert(post);
    return post;
  }

  public async findAll(): Promise<PostModel[]> {
    return this.postDatasource.find();
  }

  public async findById(id: number): Promise<PostModel | undefined> {
    const post = this.postDatasource.findOneBy({ id: id });
    return post ? post : undefined;
  }

  public async update(id: number, parmas: Partial<PostModelParams>) {
    type UpdatePostParam = Pick<PostModelParams, 'id' | 'title' | 'topic' | 'labels' | 'content'>;
    parmas.id = id;
    const post = new PostModel(parmas as UpdatePostParam);
    await this.postDatasource.update(id, post);
    return post;
  }
}
