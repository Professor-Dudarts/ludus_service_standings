import { ParticipanteService } from './../participante/participante.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campeonato } from './entities/campeonato.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { CampeonatoDto } from './dto/campeonato.dto';

@Injectable()
export class CampeonatoService {

  constructor(
    @InjectRepository(Campeonato)
    private campeonatoRepository: Repository<Campeonato>,

    private participanteService: ParticipanteService
  ) { }

  @Cron('* * 0 * * *')
  async encerrarCampeonatosAutomaticamente() {
    const dataCorrente = new Date();

    let campeonatos = await this.campeonatoRepository
      .createQueryBuilder('campeonato')
      .where('campeonato.dataFim <= :dataCorrente', { dataCorrente })
      .getMany();

    campeonatos.map(campeonato => campeonato.emAndamento = false);

    return this.campeonatoRepository.save(campeonatos);
  }
}
