import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class GenresCache {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  genre_id: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  media_count?: number;

  @Field()
  last_updated_at: Date;

  @Field()
  created_at: Date;
}
