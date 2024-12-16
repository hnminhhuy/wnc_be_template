import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import databaseConfig from 'src/config/database.config';
import swaggerConfig from 'src/config/swagger.config';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [
      databaseConfig,
      swaggerConfig
    ]
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => configService.getOrThrow<TypeOrmModuleAsyncOptions>('database') as TypeOrmModule
  })],
  controllers: [AppController],
  providers: [],
  exports: []
})
export class AppModule {}
