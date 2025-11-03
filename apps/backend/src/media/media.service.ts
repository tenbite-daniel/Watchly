import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const media = await this.prisma.mediaCache.findMany();
    return media.map(item => ({
      ...item,
      id: item.id.toString()
    }));
  }
}
