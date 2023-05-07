import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Participante } from "./participante.entity";

@Entity()
@Unique(['id'])
export class Campeonato {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: 'varchar', length: 200 })
    nomeCampeonato: string;

    @Column({ type: 'timestamptz' }) 
    dataInicio: Date;

    @Column({ type: 'timestamptz' }) 
    dataFim: Date;

    @Column()
    emAndamento: boolean;

    @OneToMany(() => Participante, participantes => participantes.campeonato)
    participantes: Participante[];
}
