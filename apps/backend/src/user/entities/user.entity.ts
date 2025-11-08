import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: String;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  display_name?: string;

  @Field()
  avatar_url?: string;

  @HideField()
  password: string;

  @Field()
  timeZone?: string;

  @Field()
  updated_at: Date;

  @Field()
  created_at: Date;
}
