//------------------Module----------------------------//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
//-----------------AppModule--------------------------//
import { InformationModule } from './information/information.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { EmailConfirmationModule } from './emailconfirmation/emailConfirmation.module';
import { UsersModule } from './users/users.module';
//-----------------Controller-------------------------//
import { AppController } from './app.controller';
//-----------------Service---------------------------//
import { AppService } from './app.service';
//-----------------Entrity----------------//
import { JobTitle } from './information/entity/JobTitle.entity'
import { Skill } from './information/entity/Skill.entity'
import { HardSkill} from './information/entity/HardSkill.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URI,
      autoLoadEntities: true,
      entities: [JobTitle,Skill,HardSkill],
      useUnifiedTopology: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI_2
      ),
  InformationModule,
  RegisterModule,
  AuthModule,
  EmailConfirmationModule,
  UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
