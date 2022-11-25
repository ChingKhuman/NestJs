import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  async findALl(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 1;
    pet.name = 'Ching';

    return [pet];
  }
}
