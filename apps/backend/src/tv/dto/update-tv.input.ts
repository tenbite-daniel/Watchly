import { CreateTvInput } from './create-tv.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTvInput extends PartialType(CreateTvInput) {
  @Field(() => Int)
  id: number;
}
