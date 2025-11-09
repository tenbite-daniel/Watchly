import { Module } from '@nestjs/common';
import {
  TimerSessionService,
  TimerHistoryService,
  WatchHistoryService,
} from './analytics.service';
import {
  TimerSessionResolver,
  TimerHistoryResolver,
  WatchHistoryResolver,
} from './analytics.resolver';

@Module({
  providers: [
    TimerSessionService,
    TimerHistoryService,
    WatchHistoryService,
    TimerSessionResolver,
    TimerHistoryResolver,
    WatchHistoryResolver,
  ],
})
export class AnalyticsModule {}
