import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { UserDevices } from 'src/user/entities/user-devices.entity';
import { User } from 'src/user/entities/user.entity';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class PendingSyncActions {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field({ nullable: true })
  device_id?: string;

  @Field()
  action_type: string;

  @Field()
  entity_type: string;

  @Field(() => GraphQLJSON)
  action_data: any;

  @Field(() => Boolean)
  is_synced: boolean;

  @Field({ nullable: true })
  synced_at?: Date;

  @Field()
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => UserDevices, { nullable: true })
  user_devices?: UserDevices;
}
