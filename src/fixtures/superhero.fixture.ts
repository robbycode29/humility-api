import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SuperheroService } from '../superhero/superhero.service';

async function runFixture() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const superheroService = app.get(SuperheroService);

    const superheroes = [
        { name: 'Superman', superpower: 'Flight', humilityScore: 8 },
        { name: 'Batman', superpower: 'Intelligence', humilityScore: 7 },
        { name: 'Wonder Woman', superpower: 'Strength', humilityScore: 9 },
    ];

    for (const hero of superheroes) {
        await superheroService.addSuperhero(hero.name, hero.superpower, hero.humilityScore);
    }

    await app.close();
}

runFixture();