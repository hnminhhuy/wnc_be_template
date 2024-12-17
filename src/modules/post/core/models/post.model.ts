import { ApiProperty } from '@nestjs/swagger';

export interface PostModelParams {
  id: number;
  title: string;
  topic: string;
  labels: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class PostModel {
  @ApiProperty()
  public readonly id: number;

  @ApiProperty()
  public readonly title: string;

  @ApiProperty()
  public readonly topic: string;

  @ApiProperty()
  public readonly labels: string;

  @ApiProperty()
  public readonly content: string;

  @ApiProperty()
  public readonly createdAt: Date;

  @ApiProperty()
  public readonly updatedAt: Date;

  constructor(params: Partial<PostModelParams>) {
    params.createdAt = params.createdAt || new Date();
    params.updatedAt = params.updatedAt || new Date();
    Object.assign(this, params);
  }
}
