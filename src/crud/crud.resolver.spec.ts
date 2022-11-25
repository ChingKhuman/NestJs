import { Test, TestingModule } from '@nestjs/testing';
import { CrudResolver } from './crud.resolver';
import { CrudService } from './crud.service';

describe('CrudResolver', () => {
  let resolver: CrudResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudResolver, CrudService],
    }).compile();

    resolver = module.get<CrudResolver>(CrudResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
