import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume,UserJobSkill} from './entity/Register.entity'

import { Resume2 , ResumeSchema} from '../myresume/entity/myresume.schema';
import { Portfolio2, PortfolioSchema } from '../portfolio/entity/portfolio.schema';
import { JobTitle } from '../information/entity/JobTitle.entity'
import { Skill } from '../information/entity/Skill.entity'
import { HardSkill} from '../information/entity/HardSkill.entity'
import { UserInfoMongoose } from './schema/register.schema';
import { UserInfoSchema } from './schema/register.schema';
import { Bookmark } from './entity/bookmark.entity';
@Module({

  imports: [TypeOrmModule.forFeature([Bookmark,Account, Userinfo,EducationHistory,WorkHistory,Certificate,AdditionalSkill,InterestedJob,HardSkill,JobTitle,Skill,Portfolio,PortfolioPicture,Resume,UserJobSkill])
            ,MongooseModule.forFeature([{ name: UserInfoMongoose.name, schema: UserInfoSchema },{ name: Resume2.name, schema: ResumeSchema },{ name: Portfolio2.name, schema: PortfolioSchema }]),
          EmailConfirmationModule,
          EmailModule,                                                                                                           ],
  
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}