import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class SearchCache {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  query_hash?: string;

  @Field({ nullable: true })
  filter_hash?: string;

  @Field({ nullable: true })
  external_id?: string;

  @Field()
  search_type: string;

  @Field(() => GraphQLJSON)
  results: any;

  @Field(() => Int, { nullable: true })
  total_results?: number;

  @Field(() => Int, { nullable: true })
  total_pages?: number;

  @Field()
  expires_at: Date;

  @Field()
  created_at: Date;
}
