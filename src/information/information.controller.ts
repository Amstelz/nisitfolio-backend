//------------------Module----------------------------//
import { Controller, Get, Param } from '@nestjs/common';
//-----------------Service---------------------------//
import { InformationService } from './information.service'


@Controller('information')
export class InformationController {
  constructor(private informationService: InformationService) {}

  @Get('/jobtitle')
  async findJobTitle()
  {
    return this.informationService.findJobTitle();
  }

  @Get(':jobtitle/skill')
  async findSkill(@Param('jobtitle') jobtitle: string)
  {
    return this.informationService.findSkill(jobtitle);
  }

  @Get(':type/hardskill')
  async findHardSkill(@Param('type') type: string)
  {
    return this.informationService.findHardSkill(type);
  }

  
}
