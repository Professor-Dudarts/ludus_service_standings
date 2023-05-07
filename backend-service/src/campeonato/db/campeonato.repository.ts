import { EntityRepository, Repository } from 'typeorm';
import { Campeonato } from './campeonato.entity';

@EntityRepository(Campeonato)
export class CampeonatoRepository extends Repository<Campeonato> {}