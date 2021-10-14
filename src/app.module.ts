//------------------Module----------------------------//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//-----------------AppModule--------------------------//
import { InformationModule } from './information/information.module';
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
    /*TypeOrmModule.forRoot({
      /*type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      port: 27017,
      //url: 'mongodb+srv://backend:VQfKYfFePGMdMSdd@cluster0.39z7o.mongodb.net/nisitfolio',
      //autoLoadEntities: true,
      entities: [JobTitle,Skill,HardSkill],
      useUnifiedTopology: true,
    }),
  InformationModule*/],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
