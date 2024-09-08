import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    console.log(user);

    return this.authService.login(user);
  }

  @Post('signup')
  async signup(@Body() body) {
    return this.userService.createUser(
      body.username,
      body.password,
      body.email,
    );
  }
}
