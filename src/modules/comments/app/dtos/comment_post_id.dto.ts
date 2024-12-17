import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

export class CommentPostIdDto {
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  @Transform(({ value }) => parseInt(value))
  public postId: number;
}
