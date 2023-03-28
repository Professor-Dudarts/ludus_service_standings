import { Injectable } from '@nestjs/common';
import { CreateCampeonatoDto } from './dto/create-campeonato.dto';
import { UpdateCampeonatoDto } from './dto/update-campeonato.dto';

@Injectable()
export class CampeonatoService {
  create(createCampeonatoDto: CreateCampeonatoDto) {
    return 'This action adds a new campeonato';
  }

  findAll() {
    return `This action returns all campeonato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campeonato`;
  }

  update(id: number, updateCampeonatoDto: UpdateCampeonatoDto) {
    return `This action updates a #${id} campeonato`;
  }

  remove(id: number) {
    return `This action removes a #${id} campeonato`;
  }
}
