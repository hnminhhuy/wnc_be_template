import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber } from 'class-validator';

export class CommentIdDto {
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  public id: number;
}
