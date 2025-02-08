import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) {}

    // Add a new superhero
    @Post()
    async addSuperhero(
        @Body('name') name: string,
        @Body('superpower') superpower: string,
        @Body('humilityScore') humilityScore: number,
    ): Promise<Superhero> {
        return this.superheroService.addSuperhero(name, superpower, humilityScore);
    }

    // Get a list of all superheroes
    @Get()
    async getSuperheroes(): Promise<Superhero[]> {
        return this.superheroService.getSuperheroes();
    }

    // Delete a superhero
    @Delete(':id')
    async deleteSuperhero(@Param('id') id: number): Promise<void> {
        return this.superheroService.deleteSuperhero(id);
    }

    // Update a superhero's information (maybe they've become more humble or learned a new superpower)
    @Patch(':id')
    async updateSuperhero(
        @Param('id') id: number,
        @Body('name') name: string,
        @Body('superpower') superpower: string,
        @Body('humilityScore') humilityScore: number,
    ): Promise<Superhero> {
        return this.superheroService.updateSuperhero(id, name, superpower, humilityScore);
    }

    // Get some stats about the superheroes in our database (might be good for you if you're a superhero recruiter, in which case you might need to add yourself to the db as well)
    @Get('stats')
    async getStats(): Promise<{ numberOfSuperheroes: number, avgHumilityScore: number, maxHumilityScore: number }> {
        return this.superheroService.getStats();
    }
}