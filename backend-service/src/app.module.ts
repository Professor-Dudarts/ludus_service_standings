import { Module } from '@nestjs/common';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { ScheduleModule } from '@nestjs/schedule';
import { ParticipanteModule } from './participante/participante.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig), CampeonatoModule, ParticipanteModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
