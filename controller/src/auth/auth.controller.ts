import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  //register(@Body() user: User) {
  //return this.authService.register(user);
  register(@Request() req) {
    return this.authService.register(req.body as User);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  //async login(@Body() user: User) {
  //return this.authService.login(user);
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
