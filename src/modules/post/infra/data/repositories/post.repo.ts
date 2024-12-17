import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostModelParams, PostModel } from 'src/modules/post/core/models/post.model';
import { IPostRepo } from 'src/modules/post/core/repositories/post.irepo';
import { PostEntity } from '../entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostRepo implements IPostRepo {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  public async create(params: Partial<PostModelParams>): Promise<PostModel> {
    const post = this.postRepository.create(params);
    await this.postRepository.insert(post);
    return post;
  }
  public async findAll(): Promise<PostModel[]> {
    const posts = await this.postRepository.find();
    return posts;
  }
  public async findById(id: number): Promise<PostModel | undefined> {
    const post = await this.postRepository.findOneBy({ id: id });
    return post ? post : undefined;
  }
}
