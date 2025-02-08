import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Superhero } from './superhero.entity';
import { Repository } from 'typeorm';

describe('SuperheroService', () => {
  let service: SuperheroService;
  let repository: Repository<Superhero>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroService,
        {
          provide: getRepositoryToken(Superhero),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
    repository = module.get<Repository<Superhero>>(getRepositoryToken(Superhero));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});