import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { UserDevices } from 'src/user/entities/user-devices.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class SyncSessions {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  device_id: string;

  @Field()
  token_hash: string;

  @Field(() => Boolean)
  is_active: boolean;

  @Field()
  expires_at: Date;

  @Field()
  last_activity_at: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => UserDevices)
  user_devices: UserDevices;
}
