import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMemberDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
}
