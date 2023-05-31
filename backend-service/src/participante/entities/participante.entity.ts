import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['id'])
export class Participante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    posicaoClassificacao: number;

    @Column({ type: 'varchar', length: 200 })
    nome: string;

    @Column({ type: 'int' })
    pontuacao: number;

    @Column({ type: 'int' })
    campeonatoId: number
}
/*
    idCampeonato: number;
    idParticipante: number;
    pontos: number;
    partidasJogadas: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    golsMarcados: number;
    golsContra: number;
    saldoGols: number;