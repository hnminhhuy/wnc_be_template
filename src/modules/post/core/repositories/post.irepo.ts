import { PostModel, PostModelParams } from '../models/post.model';

export abstract class IPostRepo {
  public abstract create(params: Partial<PostModelParams>): Promise<PostModel>;
  public abstract findAll(): Promise<PostModel[]>;
  public abstract findById(id: number): Promise<PostModel | undefined>;
}
