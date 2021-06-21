export namespace NMember {
    export type TCreateData ={
        name : string;
        email : string;
    }

    export type TMember = TCreateData & {reg_date: string}
}