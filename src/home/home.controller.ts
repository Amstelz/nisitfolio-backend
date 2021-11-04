import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { HomeService } from './home.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller("homepage")
export class HomeController {
  constructor(
    private readonly homeService: HomeService
  ) {}
  
  @UseGuards(JwtAuthGuard)
  @Get("")
  async getinformation(@Request() req)
  {
    return this.homeService.getinformation(req.user.userId);
  }
 
}