import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { MemberService } from './member.service';
import { NMember } from '../../namespaces/Member';
import TCreateData = NMember.TCreateData;

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get()
  async list(@Req() request: Request) {
    return this.memberService.getAll();
  }

  @Post()
  async create(@Body() data: TCreateData) {
    this.memberService.create(data);
  }
}
