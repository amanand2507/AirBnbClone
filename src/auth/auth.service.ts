import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Validate user credentials
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user.toObject(); // Exclude the password
      return result; // Return user data without password
    }
    throw new UnauthorizedException();
  }

  // Log in and create a JWT token
  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user._id.toString() };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
