import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // http://localhost:3000
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // http://localhost:3000/tchau
  @Get('tchau')
  getBye() {
    return this.appService.bye();
  }
}
