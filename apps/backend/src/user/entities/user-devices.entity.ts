import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class UserDevices {
  @Field(() => ID)
  id: String;

  @Field()
  user_id: string;

  @Field()
  device_id: string;

  @Field()
  device_type: string;

  @Field()
  platform: string;

  @Field()
  last_seen_at: Date;

  @Field()
  last_sync_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;
}
