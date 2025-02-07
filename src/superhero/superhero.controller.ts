import { Controller, Get, Post, Body } from '@nestjs/common';
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
}