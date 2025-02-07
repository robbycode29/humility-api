import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { Superhero } from './superhero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  providers: [SuperheroService],
  controllers: [SuperheroController],
})
export class SuperheroModule {}
