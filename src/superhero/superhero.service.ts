import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from './superhero.entity';

// Service for interacting with the Superhero entity (using ORM methods)
@Injectable()
export class SuperheroService {
    constructor(
        @InjectRepository(Superhero)
        private superheroRepository: Repository<Superhero>,
    ) {}

    // Add a new superhero: create a new Superhero entity and save it to the database
    async addSuperhero(name: string, superpower: string, humilityScore: number): Promise<Superhero> {
        const newSuperhero = this.superheroRepository.create({ name, superpower, humilityScore });
        return this.superheroRepository.save(newSuperhero);
    }

    // Get a list of all superheroes: return all Superhero entities from the database, ordered by humilityScore
    async getSuperheroes(): Promise<Superhero[]> {
        return this.superheroRepository.find({ order: { humilityScore: 'DESC' } });
    }

    // Delete a superhero: delete the Superhero entity with the given id from the database
    async deleteSuperhero(id: number): Promise<void> {
        await this.superheroRepository.delete(id);
    }

    // Update a superhero's information: find the Superhero entity with the given id, update its properties, and save it to the
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

    // Get some stats about the superheroes in our database: return the number of superheroes, the average humility score, and the maximum
    async getStats(): Promise<{ numberOfSuperheroes: number, avgHumilityScore: number, maxHumilityScore: number }> {
        const [numberOfSuperheroes, avgHumilityScore, maxHumilityScore] = await Promise.all([
            this.superheroRepository.count(),
            this.superheroRepository.createQueryBuilder('superhero')
                .select('AVG(superhero.humilityScore)', 'avg')
                .getRawOne()
                .then(result => parseFloat(result.avg)),
            this.superheroRepository.createQueryBuilder('superhero')
                .select('MAX(superhero.humilityScore)', 'max')
                .getRawOne()
                .then(result => parseFloat(result.max))
        ]);
        return { numberOfSuperheroes, avgHumilityScore, maxHumilityScore };
    }
}