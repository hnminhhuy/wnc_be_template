import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { configAppDocument } from "./app.document";
import { configAppInterceptor } from "./app.interceptor";

export const initApplication = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(AppModule, { abortOnError: true });
  const configService = app.get(ConfigService);

  await configAppInterceptor(app);
  await configAppDocument(app, configService);
  return app;
};
