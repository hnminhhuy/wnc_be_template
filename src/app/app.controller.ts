import { Controller, Get } from "@nestjs/common";

@Controller('/health')
export class AppController {
  @Get('/')
  async getHealth() {
    return 'OK!';
  }
}
