import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/gui')
  getGui(@Query('parametro') parametro): string {
    return this.appService.getGui(parametro);
  }
}
