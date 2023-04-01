import { Module } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CampeonatoController } from './campeonato.controller';

@Module({
  controllers: [CampeonatoController],
  providers: [CampeonatoService]
})
export class CampeonatoModule {}
