import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { getRedis } from 'src/infra/redis/redis.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  async findAll() {
    const peopleRedis = await getRedis(`people-all`);
    if (peopleRedis) {
      return JSON.parse(peopleRedis);
    } else {
      return this.peopleService.findAll();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const peopleRedis = await getRedis(`people-${id}`);
    if (peopleRedis) {
      return JSON.parse(peopleRedis);
    } else {
      return this.peopleService.findOne(+id);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  }
}
