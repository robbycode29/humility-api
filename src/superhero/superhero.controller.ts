import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) {}

    @Post()
    async addSuperhero(
        @Body('name') name: string,
        @Body('superpower') superpower: string,
        @Body('humilityScore') humilityScore: number,
    ): Promise<Superhero> {
        return this.superheroService.addSuperhero(name, superpower, humilityScore);
    }

    @Get()
    async getSuperheroes(): Promise<Superhero[]> {
        return this.superheroService.getSuperheroes();
    }

    @Delete(':id')
    async deleteSuperhero(@Param('id') id: number): Promise<void> {
        return this.superheroService.deleteSuperhero(id);
    }

    @Patch(':id')
    async updateSuperhero(
        @Param('id') id: number,
        @Body('name') name: string,
        @Body('superpower') superpower: string,
        @Body('humilityScore') humilityScore: number,
    ): Promise<Superhero> {
        return this.superheroService.updateSuperhero(id, name, superpower, humilityScore);
    }
}