import { ParticipanteDto } from "./participante.dto";

export class CampeonatoDto {
    nomeCampeonato: String;
    dataInicio: String;
    dataFim: String;
    emAndamento: Boolean;
    participantes: ParticipanteDto[];
}
