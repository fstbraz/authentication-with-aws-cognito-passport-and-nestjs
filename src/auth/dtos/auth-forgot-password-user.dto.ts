import { IsEmail } from 'class-validator';

export class AuthForgotPasswordUserDto {
  @IsEmail()
  email: string;
}
