import { Injectable } from '@nestjs/common';
import { CampeonatoDto } from './dto/campeonato.dto';

@Injectable()
export class CampeonatoService {
  create(CampeonatoDto: CampeonatoDto) {
    return 'This action adds a new campeonato';
  }

  findAll() {
    return `This action returns all campeonato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campeonato`;
  }

  update(id: number, campeonatoDto: CampeonatoDto) {
    return `This action updates a #${id} campeonato`;
  }

  remove(id: number) {
    return `This action removes a #${id} campeonato`;
  }
}
