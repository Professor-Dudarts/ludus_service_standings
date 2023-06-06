import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['id'])
export class Participante {
    @PrimaryGeneratedColumn()
    id: number;

    //TODO: Pegaremos a informação do participante usando o webhook (findByID)
    @Column({ type: 'numeric' })
    idParticipante: number;

    @Column({ type: 'numeric' })
    pontos: number;

    @Column({ type: 'numeric' })
    partidasJogadas: number;

    @Column({ type: 'numeric' })
    vitorias: number;

    @Column({ type: 'numeric' })
    empates: number;

    @Column({ type: 'numeric' })
    derrotas: number;

    @Column({ type: 'numeric' })
    golsMarcados: number;

    @Column({ type: 'numeric' })
    golsContra: number;

    @Column({ type: 'numeric' })
    saldoGols: number;
}