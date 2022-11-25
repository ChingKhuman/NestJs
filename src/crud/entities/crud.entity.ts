import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Crud {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
