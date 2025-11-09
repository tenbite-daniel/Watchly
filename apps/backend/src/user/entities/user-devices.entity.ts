import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { User } from './user.entity';
import { PendingSyncActions } from 'src/sync/entities/pending-sync-actions.entity';
import { SyncSessions } from 'src/sync/entities/sync-sessions.entity';

@ObjectType()
export class UserDevices {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  device_id: string;

  @Field()
  device_name: string;

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

  @Field(() => [SyncSessions], { nullable: true })
  sync_sessions?: SyncSessions[];

  @Field(() => [PendingSyncActions], { nullable: true })
  pending_sync_actions?: PendingSyncActions[];
}
