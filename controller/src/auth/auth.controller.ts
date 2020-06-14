import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: User) {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }
}
