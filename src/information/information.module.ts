//------------------Module----------------------------//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//-----------------Controller-------------------------//
import { InformationController } from './information.controller'
//-----------------Service---------------------------//
import { InformationService } from './information.service'
//-----------------Entity----------------------------//
import  JobTitle  from './entity/JobTitle.entity'
import  Skill  from './entity/Skill.entity'
import  HardSkill from './entity/HardSkill.entity'

@Module({

    imports: [TypeOrmModule.forFeature([JobTitle,Skill,HardSkill])],
    controllers: [InformationController],
    providers: [InformationService],
    exports: [InformationService,TypeOrmModule],
  })
  export class InformationModule {}