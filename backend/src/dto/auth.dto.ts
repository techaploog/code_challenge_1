import { IsEmail } from "class-validator";

export class SignInDto {
  @IsEmail({}, { message: "Invalid email address" })
  email: string;
}
