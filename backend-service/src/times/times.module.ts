import { Module } from '@nestjs/common';
import { TimesService } from './times.service';
import { TimesController } from './times.controller';

@Module({
  controllers: [TimesController],
  providers: [TimesService]
})
export class TimesModule {}
