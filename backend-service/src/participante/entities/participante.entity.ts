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
