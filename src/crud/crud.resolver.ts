import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CrudService } from './crud.service';
import { Crud } from './entities/crud.entity';
import { CreateCrudInput } from './dto/create-crud.input';
import { UpdateCrudInput } from './dto/update-crud.input';

@Resolver(() => Crud)
export class CrudResolver {
  constructor(private readonly crudService: CrudService) {}

  @Mutation(() => Crud)
  createCrud(@Args('data') data: CreateCrudInput) {
    return this.crudService.create(data);
  }

  @Query(() => [Crud], { name: 'crud' })
  findAll() {
    return this.crudService.findAll();
  }

  @Query(() => Crud, { name: 'crud' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.crudService.findOne(id);
  }

  @Mutation(() => Crud)
  updateCrud(@Args('updateCrudInput') updateCrudInput: UpdateCrudInput) {
    return this.crudService.update(updateCrudInput.id, updateCrudInput);
  }

  @Mutation(() => Crud)
  removeCrud(@Args('id', { type: () => Int }) id: number) {
    return this.crudService.remove(id);
  }
}
