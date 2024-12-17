import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import databaseConfig from 'src/config/database.config';
import swaggerConfig from 'src/config/swagger.config';
import { AppController } from './app.controller';
import { PostModule } from 'src/modules/post/post.module';
import { CommentModule } from 'src/modules/comments/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, swaggerConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.getOrThrow<TypeOrmModuleAsyncOptions>('database') as TypeOrmModule,
    }),
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
