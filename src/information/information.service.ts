//-----------------Module------------------//
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//-----------------Entrity----------------//
import  JobTitle from './entity/JobTitle.entity'
import  Skill  from './entity/Skill.entity'
import  HardSkill from './entity/HardSkill.entity'

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(JobTitle)
    private JobTitleRepository: Repository<JobTitle>,
    @InjectRepository(Skill)
    private SkillRepository: Repository<Skill>,
    @InjectRepository(HardSkill)
    private HardSkillRepository: Repository<Skill>,

  ) {}

  async findJobTitle()
  {
    return this.JobTitleRepository.find();
  }

  async findSkill(jobTitle:string)
  {
    return this.SkillRepository.find({where:{ jobTitle: jobTitle }});
  }

  async findHardSkill(Type:string)
  {
    return this.HardSkillRepository.find({where:{ Type: Type }});
  }
}