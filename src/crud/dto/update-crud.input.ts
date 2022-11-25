import { CreateCrudInput } from './create-crud.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCrudInput extends PartialType(CreateCrudInput) {
  @Field(() => Int)
  id: number;
}
