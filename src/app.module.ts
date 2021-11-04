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
import { HomeModule } from './home/home.module';
import { PortModule } from './portfolio/portfolio.module';
import { MyResumeModule } from './myresume/myresume.module';
import { ForgotPasswordModule } from './forgotpassword/forgotpassword.module';
import { SearchModule } from './search/search.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { BookmarkModule } from './bookmarks/bookmarks.module';
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
  EmailConfirmationModule,
  
  InformationModule,
  RegisterModule,
  AuthModule,
  EmailConfirmationModule,
  UsersModule,
  HomeModule,
  PortModule,
  ForgotPasswordModule,
  MyResumeModule,  
  AnalyticsModule,
  BookmarkModule,
  SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
