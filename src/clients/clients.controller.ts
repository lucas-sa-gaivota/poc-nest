import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { getRedis } from 'src/infra/redis/redis.service';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll() {
    const clientsRedis = await getRedis(`client-all`);

    if (clientsRedis) {
      return JSON.parse(clientsRedis);
    } else {
      return this.clientsService.findAll();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const clientRedis = await getRedis(`client-${id}`);

    if (clientRedis) {
      return JSON.parse(clientRedis);
    } else {
      return this.clientsService.findOne(+id);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
