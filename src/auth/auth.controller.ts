import {Body,Controller,Post,ClassSerializerInterceptor,UseInterceptors,} from '@nestjs/common';
import { AuthService } from './auth.service'
import { CreateRegisDto } from '../register/dto/create-register.dto';
import { UsersService } from '../users/users.service';
import { EmailConfirmationService } from '../emailconfirmation/emailConfirmation.service';
import { RegisterService } from '../register/register.service';
import { RealIP } from 'nestjs-real-ip';
   
@Controller('authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthenticationController {
constructor(
    private registerService: RegisterService,
    private readonly emailConfirmationService: EmailConfirmationService
) {}
   
@Post('register')
async register(@Body() registrationData: CreateRegisDto,@RealIP() ip: string) {
   
    const user = await this.registerService.createRegis(registrationData,ip)
    await this.emailConfirmationService.sendVerificationLink(registrationData.Email);
    return user;
}
    
}