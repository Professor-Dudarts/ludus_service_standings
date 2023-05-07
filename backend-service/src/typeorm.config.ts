import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Campeonato } from './campeonato/entities/campeonato.entity';
import { Participante } from './campeonato/entities/participante.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'standings',
  password: 'h44AkV9O@gRy',
  database: 'standings-postgres',
  entities: [Campeonato, Participante],
  synchronize: true,
};