import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  // Create a new TestingModule with the SuperheroController and a mocked SuperheroService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: {
            addSuperhero: jest.fn().mockResolvedValue({
              id: 1,
              name: 'Superman',
              superpower: 'Flight',
              humilityScore: 8,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  // Test the addSuperhero method
  it('should add a new superhero', async () => {
    const newSuperhero: Superhero = {
      id: 1,
      name: 'Superman',
      superpower: 'Flight',
      humilityScore: 8,
    };

    const result = await controller.addSuperhero(
        newSuperhero.name,
        newSuperhero.superpower,
        newSuperhero.humilityScore,
    );

    expect(result).toEqual(newSuperhero);
    expect(service.addSuperhero).toHaveBeenCalledWith(
        newSuperhero.name,
        newSuperhero.superpower,
        newSuperhero.humilityScore,
    );
  });
});