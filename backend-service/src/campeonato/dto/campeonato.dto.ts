import { Participante } from "src/participante/entities/participante.entity";

export class CampeonatoDto {
    readonly id: number;
    nomeCampeonato: string;
    dataInicio: Date;
    dataFim: Date;
    emAndamento: boolean;
    participantes: Participante[]
}
