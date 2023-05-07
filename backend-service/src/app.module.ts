import { Module } from '@nestjs/common';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { DataSource } from 'typeorm';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig), CampeonatoModule],
    
  controllers: [],
  providers: [],
})
export class AppModule { }
