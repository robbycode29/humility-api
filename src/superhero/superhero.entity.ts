import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNumber, IsString, Min, Max } from 'class-validator';

@Entity()
export class Superhero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    superpower: string;

    @Column('float')
    @IsNumber()
    @Min(0)
    @Max(1)
    humilityScore: number;
}