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

    async deleteSuperhero(id: number): Promise<void> {
        await this.superheroRepository.delete(id);
    }

    async updateSuperhero(id: number, name: string, superpower: string, humilityScore: number): Promise<Superhero> {
        const superhero = await this.superheroRepository.findOneBy({ id });
        if (!superhero) {
            throw new Error('Superhero not found');
        }
        superhero.name = name;
        superhero.superpower = superpower;
        superhero.humilityScore = humilityScore;
        return this.superheroRepository.save(superhero);
    }
}