import { registerAs } from '@nestjs/config';

export default registerAs('swagger', () => ({
  title: 'Final test',
  description: 'Final test description',
  path: process.env.SWAGGER_PATH,
}));
