import { Injectable } from '@nestjs/common';
import { CreateTvInput } from './dto/create-tv.input';
import { UpdateTvInput } from './dto/update-tv.input';

@Injectable()
export class TvService {
  create(createTvInput: CreateTvInput) {
    return 'This action adds a new tv';
  }

  findAll() {
    return `This action returns all tv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tv`;
  }

  update(id: number, updateTvInput: UpdateTvInput) {
    return `This action updates a #${id} tv`;
  }

  remove(id: number) {
    return `This action removes a #${id} tv`;
  }
}
