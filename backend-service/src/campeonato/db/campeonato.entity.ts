import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}
