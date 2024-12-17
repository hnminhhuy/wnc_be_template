import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CommentModel, CommentModelParams } from '../../core/models/comment.model';

@Injectable()
export class CommentDatasource {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
  ) {}

  public async create(params: Partial<CommentModelParams>) {
    const comment = this.commentRepo.create(params);
    await this.commentRepo.insert(comment);
    return comment;
  }

  public async getList(postId: number): Promise<CommentModel[]> {
    const comments = this.commentRepo.findBy({ postId: postId });
    return comments;
  }

  public async get(id: number): Promise<CommentModel | undefined> {
    const comment = this.commentRepo.findOneBy({ id: id });
    return comment ? comment : undefined;
  }
}
