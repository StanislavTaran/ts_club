import { Injectable } from '@nestjs/common';
import { NMember } from '../../namespaces/Member';
import TMember = NMember.TMember;
import { MemberModel } from '../../models/MemberModel';
import { CreateMemberDTO } from '../DTO/CreateMemberDTO';

@Injectable()
export class MemberService {
  private members: TMember[] = [
    {
      id: 1,
      name: 'Stanislav',
      email: 'stastaransa1nt@gmail.com',
      reg_date: new Date().toUTCString(),
    },
  ];

  getAll() {
    return this.members;
  }

  create(data: CreateMemberDTO) {
    const isNotUniqEmail = !!this.members.find(
      (item) => item.email === data.email,
    );
    if (isNotUniqEmail) {
      throw new Error('Email must be unique');
    }
    const { member } = new MemberModel(data, this.members.length + 1);
    this.members.push(member);
    return member;
  }
}
