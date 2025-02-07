import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, IsString, Min, Max } from 'class-validator';

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

    @Column()
    @IsInt()
    @Min(1)
    @Max(10)
    humilityScore: number;
}