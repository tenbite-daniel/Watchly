import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class UserSettings {
  @Field(() => ID)
  id: String;

  @Field()
  userId: string;

  @Field(() => Boolean)
  notifications_enabled: boolean;

  @Field(() => Boolean)
  email_updates: boolean;

  @Field(() => Boolean)
  auto_play_trailers: boolean;

  @Field()
  default_list_type: string;

  @Field()
  theme: string;

  @Field()
  updated_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;
}
