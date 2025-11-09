import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SyncService } from './sync.service';
import { SyncSessions } from './entities/sync-sessions.entity';
import { CreateSyncInput } from './dto/create-sync.input';
import { UpdateSyncInput } from './dto/update-sync.input';

@Resolver(() => SyncSessions)
export class SyncResolver {
  constructor(private readonly syncService: SyncService) {}

  @Mutation(() => SyncSessions)
  createSync(@Args('createSyncInput') createSyncInput: CreateSyncInput) {
    return this.syncService.create(createSyncInput);
  }

  @Query(() => [SyncSessions], { name: 'sync' })
  findAll() {
    return this.syncService.findAll();
  }

  @Query(() => SyncSessions, { name: 'sync' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.syncService.findOne(id);
  }

  @Mutation(() => SyncSessions)
  updateSync(@Args('updateSyncInput') updateSyncInput: UpdateSyncInput) {
    return this.syncService.update(updateSyncInput.id, updateSyncInput);
  }

  @Mutation(() => SyncSessions)
  removeSync(@Args('id', { type: () => Int }) id: number) {
    return this.syncService.remove(id);
  }
}
