import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const configAppDocument = async (
  app: INestApplication,
  configService: ConfigService
): Promise<void> => {
  const title = configService.get<string>('swagger.title');
  const description = configService.get<string>('swagger.description');
  const path = configService.get<string>('swagger.path');

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(path, app, document);

}
