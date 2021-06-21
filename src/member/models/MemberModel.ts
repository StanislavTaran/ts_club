import { NMember } from '../namespaces/Member';
import TMember = NMember.TMember;
import { CreateMemberDTO } from '../DTO/CreateMemberDTO';

export class MemberModel {
  member: TMember;
  constructor(data: CreateMemberDTO, id: number) {
    this.member = { ...data, id, reg_date: new Date().toUTCString() };
  }
}
