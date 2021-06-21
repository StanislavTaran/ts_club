import {NMember} from "../namespaces/Member";
import TCreateData = NMember.TCreateData;
import TMember = NMember.TMember;

export class MemberModel {
     member : TMember
    constructor(data : TCreateData){
        this.member = {...data, reg_date : Date.now().toString()}
    }
}