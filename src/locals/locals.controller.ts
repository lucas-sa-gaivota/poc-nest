import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalsService } from './locals.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { getRedis } from 'src/infra/redis/redis.service';

@Controller('locals')
export class LocalsController {
  constructor(private readonly localsService: LocalsService) {}

  @Post()
  create(@Body() createLocalDto: CreateLocalDto) {
    return this.localsService.create(createLocalDto);
  }

  @Get()
  async findAll() {
    const localsRedis = await getRedis(`local-all`);
    if (localsRedis) {
      return JSON.parse(localsRedis);
    } else {
      return this.localsService.findAll();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const localsRedis = await getRedis(`local-${id}`);
    if (localsRedis) {
      return JSON.parse(localsRedis);
    } else {
      return this.localsService.findOne(+id);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalDto: UpdateLocalDto) {
    return this.localsService.update(+id, updateLocalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localsService.remove(+id);
  }
}
