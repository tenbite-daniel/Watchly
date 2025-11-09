import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  TimerSessionService,
  TimerHistoryService,
  WatchHistoryService,
} from './analytics.service';
import { TimerHistory } from './entities/timer-history.entity';
import { TimerSession } from './entities/timer-session.entity';
import { WatchHistory } from './entities/watch-history.entity';

@Resolver(() => TimerSession)
export class TimerSessionResolver {
  constructor(private readonly analyticsService: TimerSessionService) {}

  @Query(() => [TimerSession], { name: 'timerSession' })
  findAll() {
    return this.analyticsService.findAll();
  }
}

@Resolver(() => TimerHistory)
export class TimerHistoryResolver {
  constructor(private readonly analyticsService: TimerHistoryService) {}

  @Query(() => [TimerHistory], { name: 'timerHistory' })
  findAll() {
    return this.analyticsService.findAll();
  }
}

@Resolver(() => WatchHistory)
export class WatchHistoryResolver {
  constructor(private readonly analyticsService: WatchHistoryService) {}

  @Query(() => [WatchHistory], { name: 'watchHistory' })
  findAll() {
    return this.analyticsService.findAll();
  }
}
