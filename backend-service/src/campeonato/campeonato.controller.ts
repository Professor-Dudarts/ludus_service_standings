import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CampeonatoDto } from './dto/campeonato.dto';

@Controller('campeonato')
export class CampeonatoController {
  constructor(private readonly campeonatoService: CampeonatoService) {}

  @Post()
  create(@Body() CampeonatoDto: CampeonatoDto) {
    return this.campeonatoService.create(CampeonatoDto);
  }

  @Get()
  findAll() {
    return this.campeonatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campeonatoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() CampeonatoDto: CampeonatoDto) {
    return this.campeonatoService.update(+id, CampeonatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campeonatoService.remove(+id);
  }
}
