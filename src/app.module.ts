import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroModule } from './superhero/superhero.module';
import { Superhero } from './superhero/superhero.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Superhero],
      synchronize: true,
    }),
    SuperheroModule,
  ],
})
export class AppModule {}