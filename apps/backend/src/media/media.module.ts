import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import {
  MediaResolver,
  GenreResolver,
  MediaCollectionResolver,
  SearchResolver,
  PeopleResolver,
} from './media.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    MediaResolver,
    GenreResolver,
    MediaCollectionResolver,
    SearchResolver,
    PeopleResolver,
    MediaService,
    PrismaService,
  ],
})
export class MediaModule {}
