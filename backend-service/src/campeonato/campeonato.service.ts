import { ParticipanteService } from './../participante/participante.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campeonato } from './entities/campeonato.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { Participante } from '../participante/entities/participante.entity';
import { CampeonatoDto } from './dto/campeonato.dto';

@Injectable()
export class CampeonatoService {

  constructor(
    @InjectRepository(Campeonato)
    private campeonatoRepository: Repository<Campeonato>,

    private participanteService: ParticipanteService
  ) { }

  async create(campeonatoDto: CampeonatoDto): Promise<Campeonato> {

    if (!campeonatoDto.nomeCampeonato) {
      throw new UnprocessableEntityException('Nome é obrigatório');
    }

    if (!campeonatoDto.dataInicio) {
      throw new UnprocessableEntityException('A data de início é obrigatória');
    }

    if (!campeonatoDto.dataFim) {
      throw new UnprocessableEntityException('A data de encerramento é obrigatória');
    }

    if (campeonatoDto.dataInicio > campeonatoDto.dataFim) {
      throw new UnprocessableEntityException('A data de início não pode ser posterior a data de encerramento');
    }

    if (campeonatoDto.emAndamento === null || campeonatoDto.emAndamento === undefined) {
      throw new UnprocessableEntityException('Obrigatório informar se o campeonato está em andamento');
    }

    if (campeonatoDto.participantes.length === 0) {
      throw new UnprocessableEntityException('Obrigatório informar os participantes(nome do time, pontos atuais e sua respectiva posição)')
    }

    let campeonato = new Campeonato();
    campeonato.nomeCampeonato = campeonatoDto.nomeCampeonato;
    campeonato.dataInicio = campeonatoDto.dataInicio;
    campeonato.dataFim = campeonatoDto.dataFim;
    campeonato.emAndamento = campeonatoDto.emAndamento;

    campeonato = await this.campeonatoRepository.save(campeonato);

    campeonato.participantes = await this.participanteService.salveAll(campeonatoDto.participantes, campeonato.id);

    return campeonato;
  }

  async findAll(): Promise<Campeonato[]> {
    return this.campeonatoRepository.find();
  }

  async findOne(id: number): Promise<Campeonato> {
    let campeonato: Campeonato = await this.campeonatoRepository.findOneBy({ id: id });

    if (!campeonato) {
      throw new UnprocessableEntityException('Campeonato não cadastrado');
    }

    campeonato.participantes = await this.participanteService.findByCampeonatoId(campeonato.id);

    return campeonato;
  }

  async update(id: number, campeonatoDto: CampeonatoDto): Promise<Campeonato> {

    if (!campeonatoDto.nomeCampeonato) {
      throw new UnprocessableEntityException('Nome é obrigatório');
    }

    if (!campeonatoDto.dataInicio) {
      throw new UnprocessableEntityException('A data de início é obrigatória');
    }

    if (!campeonatoDto.dataFim) {
      throw new UnprocessableEntityException('A data de encerramento é obrigatória');
    }

    if (campeonatoDto.dataInicio > campeonatoDto.dataFim) {
      throw new UnprocessableEntityException('A data de início não pode ser posterior a data de encerramento');
    }

    let campeonato: Campeonato = await this.campeonatoRepository.findOneBy({ id: id });

    if (!campeonato) {
      throw new UnprocessableEntityException('Campeonato não cadastrado');
    }

    campeonato.nomeCampeonato = campeonatoDto.nomeCampeonato;
    campeonato.dataInicio = campeonatoDto.dataInicio
    campeonato.dataFim = campeonatoDto.dataFim
    campeonato.emAndamento = campeonatoDto.emAndamento
    campeonato = await this.campeonatoRepository.save(campeonato);

    campeonato.participantes = await this.participanteService.salveAll(campeonatoDto.participantes, campeonato.id);

    return campeonato;
  }

  async remove(id: number) {
    let campeonato: Campeonato = await this.campeonatoRepository.findOneBy({ id: id });

    if (!campeonato) {
      throw new UnprocessableEntityException('Campeonato não cadastrado');
    }

    this.participanteService.deleteByCampeonatoId(campeonato.id);
    return this.campeonatoRepository.delete({ id: campeonato.id });
  }


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
