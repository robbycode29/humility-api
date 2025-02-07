import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
    constructor(
        @InjectRepository(Superhero)
        private superheroRepository: Repository<Superhero>,
    ) {}

    async addSuperhero(name: string, superpower: string, humilityScore: number): Promise<Superhero> {
        const newSuperhero = this.superheroRepository.create({ name, superpower, humilityScore });
        return this.superheroRepository.save(newSuperhero);
    }

    async getSuperheroes(): Promise<Superhero[]> {
        return this.superheroRepository.find({ order: { humilityScore: 'DESC' } });
    }
}