import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampeonatoModule } from './campeonato/campeonato.module';

@Module({
  imports: [CampeonatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
