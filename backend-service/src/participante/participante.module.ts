import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipanteService } from './participante.service';
import { Participante } from './entities/participante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participante])],
  controllers: [],
  providers: [ParticipanteService],
  exports: [ParticipanteService]
})
export class ParticipanteModule { }
