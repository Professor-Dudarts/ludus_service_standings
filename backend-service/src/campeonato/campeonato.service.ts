import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CampeonatoDto } from './dto/campeonato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Campeonato } from './entities/campeonato.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CampeonatoService {

  constructor(
    @InjectRepository(Campeonato)
    private campeonatoRepository: Repository<Campeonato>,
  ) { }

  async create(campeonatoDto: CampeonatoDto): Promise<CampeonatoDto> {
//  FIXME: NÃO ESTÁ SALVANDO OS PARTICIPANTES;
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

    return this.campeonatoRepository.save(campeonatoDto);
  }

  async findAll(): Promise<CampeonatoDto[]> {
    return this.campeonatoRepository.find();
  }

  async findOne(id: number): Promise<CampeonatoDto> {
    let campeonato: Campeonato = await this.campeonatoRepository.findOneBy({ id: id });

    if (!campeonato) {
      throw new UnprocessableEntityException('Campeonato não cadastrado');
    }

    return campeonato;
  }

  async update(id: number, campeonatoDto: CampeonatoDto): Promise<CampeonatoDto> {

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

    campeonato.dataInicio = campeonatoDto.dataInicio
    campeonato.dataFim = campeonatoDto.dataFim
    campeonato.emAndamento = campeonatoDto.emAndamento

    // FIXME: MAPEAR ISSO AQUI PRA ATUALIZAR OS PARTICIPANTES
    // campeonato.participantes = campeonatoDto.participantes

    return this.campeonatoRepository.save(campeonato);
  }

  async remove(id: number) {
    return this.campeonatoRepository.delete({ id: id });
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
