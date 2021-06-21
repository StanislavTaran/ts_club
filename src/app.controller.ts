import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { MemberService } from './member/member.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'IT WORKS' };
  }
}
