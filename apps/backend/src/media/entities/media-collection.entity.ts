import { ObjectType, Field, ID, Float, Int, HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class MediaCollection {
  @Field(() => ID)
  id: string;

  @HideField()
  collection_id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  poster_path?: string;

  @Field({ nullable: true })
  backdrop_path?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  media_ids: any;

  @Field(() => GraphQLJSON, { nullable: true })
  collection_data: any;

  @Field()
  last_fetched_at: Date;

  @Field()
  created_at: Date;
}
