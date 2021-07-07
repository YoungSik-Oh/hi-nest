import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  //AppController를 가질때 app.controller가 하는 일
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
