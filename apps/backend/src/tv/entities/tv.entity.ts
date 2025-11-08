import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tv {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
