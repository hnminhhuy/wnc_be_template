import { ApiProperty } from '@nestjs/swagger';

export interface CommentModelParams {
  id?: number;
  commentor: string;
  content: string;
  postId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CommentModel {
  @ApiProperty()
  public readonly id: number;

  @ApiProperty()
  public readonly commentor: string;

  @ApiProperty()
  public readonly content: string;

  @ApiProperty()
  public readonly postId: number;

  @ApiProperty()
  public readonly createdAt: Date;

  @ApiProperty()
  public readonly updatedAt: Date;

  constructor(params: Partial<CommentModelParams>) {
    Object.assign(this, params);
  }
}
