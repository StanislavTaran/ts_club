import { Controller, Get, Post, Req, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { MemberService } from './member.service';
import { CreateMemberDTO } from './DTO/CreateMemberDTO';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get()
  async list(@Req() request: Request) {
    return this.memberService.getAll();
  }

  @Post('/create')
  async create(@Body() data: CreateMemberDTO, @Res() res: Response) {
    try {
      const member = this.memberService.create(data);
      res.status(201).json({ data: member });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
}
