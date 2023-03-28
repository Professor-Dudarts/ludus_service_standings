import { PartialType } from '@nestjs/mapped-types';
import { CreateCampeonatoDto } from './create-campeonato.dto';

export class UpdateCampeonatoDto extends PartialType(CreateCampeonatoDto) {}
