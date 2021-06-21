import { Controller, Get, Render } from '@nestjs/common';
import { MemberService } from './member/member.service';

@Controller()
export class AppController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  @Render('index')
  root() {
    const members = this.memberService.getAll();
    return { members };
  }
}
