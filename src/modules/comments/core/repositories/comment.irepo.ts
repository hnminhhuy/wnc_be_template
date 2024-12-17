import { CommentModel, CommentModelParams } from '../models/comment.model';

export abstract class ICommentRepo {
  public abstract create(params: Partial<CommentModelParams>): Promise<CommentModel>;
  public abstract getList(post_id: number): Promise<CommentModel[]>;
  public abstract get(id: number): Promise<CommentModel | undefined>;
}
