import { ParticipanteDto } from "./participante.dto";

export class CampeonatoDto {
    nomeCampeonato: string;
    dataInicio: Date;
    dataFim: Date;
    emAndamento: boolean;
    participantes: ParticipanteDto[];
}
