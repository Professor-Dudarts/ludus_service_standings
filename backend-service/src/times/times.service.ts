import { Injectable } from '@nestjs/common';
import { TimePontosCorridosDto } from './dto/timesPontosCorridos.dto';

@Injectable()
export class TimesService {
  create(createTimeDto: CreateTimeDto) {
    return 'This action adds a new time';
  }

  findAll() {
    return `This action returns all times`;
  }

  findOne(id: number) {
    return `This action returns a #${id} time`;
  }

  update(id: number, updateTimeDto: UpdateTimeDto) {
    return `This action updates a #${id} time`;
  }

  remove(id: number) {
    return `This action removes a #${id} time`;
  }
}
