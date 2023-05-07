import { Module } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CampeonatoController } from './campeonato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campeonato } from './entities/campeonato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campeonato])],
  controllers: [CampeonatoController],
  providers: [CampeonatoService],
  exports: [CampeonatoService]
})
export class CampeonatoModule { }
