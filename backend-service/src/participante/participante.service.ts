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
}
