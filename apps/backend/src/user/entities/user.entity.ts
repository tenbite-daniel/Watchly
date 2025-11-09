import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { UserSettings } from './user-settings.entity';
import { UserDevices } from './user-devices.entity';
import { Lists } from 'src/content/entities/lists.entity';
import { Ratings } from 'src/content/entities/ratings.entity';
import { Notes } from 'src/content/entities/notes.entity';
import { TimerSession } from 'src/analytics/entities/timer-session.entity';
import { TimerHistory } from 'src/analytics/entities/timer-history.entity';
import { WatchHistory } from 'src/analytics/entities/watch-history.entity';
import { SyncSessions } from 'src/sync/entities/sync-sessions.entity';
import { PendingSyncActions } from 'src/sync/entities/pending-sync-actions.entity';
import { SyncConflicts } from 'src/sync/entities/sync-conflicts.entity';

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

  @Field(() => [Lists], { nullable: true })
  lists?: Lists[];

  @Field(() => [Ratings], { nullable: true })
  ratings?: Ratings[];

  @Field(() => [Notes], { nullable: true })
  notes?: Notes[];

  @Field(() => [TimerSession], { nullable: true })
  timer_session?: TimerSession[];

  @Field(() => [TimerHistory], { nullable: true })
  timer_history?: TimerHistory[];

  @Field(() => [WatchHistory], { nullable: true })
  watch_history?: WatchHistory[];

  @Field(() => [UserDevices], { nullable: true })
  user_devices?: UserDevices[];

  @Field(() => [SyncSessions], { nullable: true })
  sync_sessions?: SyncSessions[];

  @Field(() => [PendingSyncActions], { nullable: true })
  pending_sync_actions?: PendingSyncActions[];

  @Field(() => [SyncConflicts], { nullable: true })
  sync_conflicts?: SyncConflicts[];

  @Field(() => [SyncConflicts], { nullable: true })
  resolved_conflicts?: SyncConflicts[];
}
