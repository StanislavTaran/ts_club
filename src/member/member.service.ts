import { Injectable } from '@nestjs/common';
import {NMember} from "../../namespaces/Member";
import TMember = NMember.TMember;
import TCreateData = NMember.TCreateData;
import {MemberModel} from "../../models/MemberModel";

@Injectable()
export class MemberService {
    private members : TMember[] = []

    getAll(){
        return this.members;
    }

    create(data : TCreateData){
        const { member } =  new MemberModel(data);
        this.members.push(member);
    }
}
