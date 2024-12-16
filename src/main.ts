import { initApplication } from './app';

async function bootstrap() {
  const app = await initApplication();
  const port = parseInt(process.env.PORT) || 3000;

  await app.listen(port);
}
bootstrap();
