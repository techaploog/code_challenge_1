import { Controller, Post, Body, Get } from "@nestjs/common";

import { AuthService } from "./auth.service";

import { SignInDto } from "@dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: SignInDto) {
    return this.authService.login(body);
  }

  @Get()
  async test() {
    return { success: true };
  }
}
