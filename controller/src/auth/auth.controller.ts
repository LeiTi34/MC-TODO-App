import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
      
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
