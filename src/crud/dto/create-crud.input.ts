import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCrudInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
