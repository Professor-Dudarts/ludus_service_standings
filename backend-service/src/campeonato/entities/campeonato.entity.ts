import { Participante } from "./participante.entity";

export class Campeonato {
    id: Number;
    nomeCampeonato: String;
    dataInicio: String;
    dataFim: String;
    emAndamento: Boolean;
    participantes: Participante[];
}
