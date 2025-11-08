import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class PeopleCache {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => GraphQLJSON, { nullable: true })
  also_known_for?: any;

  @Field(() => Int, { nullable: true })
  gender?: number;

  @Field({ nullable: true })
  known_for_department?: string;

  @Field({ nullable: true })
  biography?: string;

  @Field(() => Int, { nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  place_of_birth?: string;

  @Field({ nullable: true })
  profile_path?: string;

  @Field({ nullable: true })
  imdb_id?: string;

  @Field()
  last_fetched_at: Date;

  @Field()
  created_at: Date;
}
