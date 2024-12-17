import { PickType } from '@nestjs/swagger';
import { PostDto } from './post.dto';

export class UpdatePostDto extends PickType(PostDto, ['title', 'topic', 'labels', 'content']) {}
