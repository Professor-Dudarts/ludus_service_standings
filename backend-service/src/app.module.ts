import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { TimesModule } from './times/times.module';

@Module({
  imports: [CampeonatoModule, TimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
