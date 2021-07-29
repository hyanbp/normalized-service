import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('normalize')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() list: Array<string>): Promise<Array<string>> {
    return this.appService.normalized(list);
  }
}
