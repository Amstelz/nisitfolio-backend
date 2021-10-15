import { Controller, Get , Post, Request, UseGuards,Param} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  AppInformation(): string {
    return this.appService.AppInformation();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req,@RealIP() ip: string) {
    
    return this.authService.login(req.user,ip);
  }

  @Get('valid/:email')
  async findemail(@Param('email') email: string)
  {
    return this.usersService.findOne(email);
  }
}
