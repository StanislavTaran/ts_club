import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { MemberService } from './member/member.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly memberService: MemberService,
  ) {}

  @Get()
  @Render('index')
  root() {
    const members = this.memberService.getAll();
    return { members };
  }
}
