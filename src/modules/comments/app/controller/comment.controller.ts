import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentUsecase, GetCommentUsecase, GetListCommentsUsecase } from '../../core/usecases';
import { CommentPostIdDto } from '../dtos/comment_post_id.dto';
import { CreateCommentDto } from '../dtos/create_comment.dto';
import { CommentModelParams } from '../../core/models/comment.model';
import { CommentIdDto } from '../dtos/comment_id.dto';
import { SwaggerApi } from 'src/decorators';

@Controller({ path: '/api/comments/v1' })
export class CommentController {
  constructor(
    private readonly createCommentUsecase: CreateCommentUsecase,
    private readonly getListCommentUsecase: GetListCommentsUsecase,
    private readonly getCommentUsecase: GetCommentUsecase,
  ) {}

  @SwaggerApi({})
  @Post('/:postId')
  async createComment(@Param() params: CommentPostIdDto, @Body() body: CreateCommentDto) {
    const attributes: CommentModelParams = {
      commentor: body.commentor,
      postId: params.postId,
      content: body.content,
    };

    const comment = await this.createCommentUsecase.execute(attributes);
    return comment;
  }

  @SwaggerApi({})
  @Get('/:postId/list')
  async getListComment(@Param() params: CommentPostIdDto) {
    const comments = await this.getListCommentUsecase.execute(params.postId);
    return comments;
  }

  @SwaggerApi({})
  @Get(':id')
  async getComment(@Param() param: CommentIdDto) {
    const comment = await this.getCommentUsecase.execute(param.id);
    return comment;
  }
}
