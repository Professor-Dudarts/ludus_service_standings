import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participante } from './entities/participante.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ParticipanteService {

    constructor(
        @InjectRepository(Participante)
        private participanteRepository: Repository<Participante>,
    ) { }

    async salveAll(participantes: Participante[], campeonatoId: number): Promise<Participante[]> {
        this.participanteRepository.delete({ campeonatoId: campeonatoId });

        /*participantes.forEach(participante => {
            if (!participante.nome) {
                throw new UnprocessableEntityException('Nome do participante é obrigatório');
            }

            if (!participante.pontuacao) {
                throw new UnprocessableEntityException('Pontuação do participante é obrigatória');
            }

            if (!participante.posicaoClassificacao) {
                throw new UnprocessableEntityException('Classificação do participante é obrigatória');
            }

            participante.campeonatoId = campeonatoId;
        })*/

        return this.participanteRepository.save(participantes);
    }

    async findByCampeonatoId(campeonatoId: number): Promise<Participante[]> {
        return this.participanteRepository.findBy({ campeonatoId: campeonatoId });
    }

    async deleteByCampeonatoId(campeonatoId: number): Promise<DeleteResult> {
        return this.participanteRepository.delete({ campeonatoId: campeonatoId });
    }
}
