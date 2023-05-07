import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Campeonato } from "./campeonato.entity";

@Entity()
@Unique(['id'])
export class Participante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    classificacao: number;

    @Column({ type: 'varchar', length: 200 })
    nome: String;

    @Column({ type: 'int' })
    pontuacao: number;

    @ManyToOne(() => Campeonato, (campeonato) => campeonato.participantes)
    campeonato: Campeonato
}
