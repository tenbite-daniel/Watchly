import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTvInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
