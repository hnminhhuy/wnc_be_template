import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNumber, IsString } from 'class-validator';

export class PostDto {
  @ApiProperty()
  @IsNumber()
  public id: number;

  @ApiProperty()
  @IsString()
  @IsDefined()
  public title: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  public topic: string;

  @ApiProperty()
  @IsString()
  public labels: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  public content: string;

  @ApiProperty()
  @IsDateString()
  public createdAt: Date;

  @ApiProperty()
  @IsDateString()
  public updatedAt: Date;
}
