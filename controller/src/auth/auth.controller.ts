import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  authService: any;
  @Post('register')
  register(@Request() req) {
    return this.authService.register(req.body as User);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
