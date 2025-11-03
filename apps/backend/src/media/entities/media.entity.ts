import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { boolean, string } from 'zod';
@ObjectType()
export class Media {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  origianl_title?: string;

  @Field({ nullable: true })
  tagline?: string;

  @Field({ nullable: true })
  poster_path?: string;

  @Field({ nullable: true })
  backdrop_path?: string;

  @Field({ nullable: true })
  release_date?: string;

  @Field({ nullable: true })
  first_air_date?: Date;

  @Field({ nullable: true })
  status?: string;

  @Field(() => Float, { nullable: true })
  popularity?: number;

  @Field(() => Float, { nullable: true })
  vote_average?: number;

  @Field(() => Int, { nullable: true })
  vote_count?: number;

  @Field({ nullable: true })
  origial_language?: string;

  @Field(() => Boolean, { nullable: true })
  adult?: boolean;

  @Field(() => [String], { nullable: true })
  genres?: string[];

  @Field(() => [String], { nullable: true })
  production_companies?: string[];

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field(() => Int, { nullable: true })
  number_of_seasons?: number;

  @Field(() => Int, { nullable: true })
  number_of_episodes?: number;

  @Field(() => [String], { nullable: true })
  episode_run_time?: string[];

  @Field(() => Boolean, { nullable: true })
  in_production?: boolean;

  @Field({ nullable: true })
  last_air_date?: Date;

  @Field(() => [String], { nullable: true })
  trailer_urls?: string[];

  @Field(() => [String], { nullable: true })
  external_ids?: string[];

  @Field(() => Boolean)
  is_manual_entry: boolean;

  @Field()
  source_api: string;

  @Field()
  last_fetched_at: Date;

  @Field()
  created_at: Date;
}
