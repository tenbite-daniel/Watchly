import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { UserSettings } from './user-settings.entity';
import { UserDevices } from './user-devices.entity';

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

  @Field(() => UserSettings, { nullable: true })
  settings?: UserSettings;

  @Field(() => [UserDevices], { nullable: true })
  user_devices?: UserDevices[];
}
