import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNumber, IsString } from 'class-validator';

export class CommentDto {
  @ApiProperty()
  @IsDefined()
  public id: number;

  @ApiProperty()
  @IsString()
  @IsDefined()
  public commentor: string;

  @ApiProperty()
  @IsDefined()
  public content: string;

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  public postId: number;

  @ApiProperty()
  @IsDateString()
  public createdAt: Date;

  @ApiProperty()
  @IsDateString()
  public updatedAt: Date;
}
