import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const client = new Client(
      createClientDto.name,
      createClientDto.clientTypeId,
      createClientDto.createBy,
      createClientDto.updatedBy,
    ).get();

    const clientCreated = await this.prismaService.client.create({
      data: client,
    });
    return clientCreated;
  }

  async findAll() {
    const clients = await this.prismaService.client.findMany();
    return clients;
  }

  async findOne(id: number) {
    const client = await this.prismaService.client.findFirst({
      where: {
        id: id,
      },
    });

    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.findOne(id);

    if (!client) {
      throw new Error(`Client not found`);
    }

    const newClientData = new Client(
      updateClientDto.name,
      updateClientDto.clientTypeId,
      client.createBy,
      updateClientDto.updatedBy,
      client.createdAt,
    ).get();

    const clients = await this.prismaService.client.updateMany({
      where: {
        id: id,
      },
      data: {
        name: newClientData.name,
        clientTypeId: newClientData.clientTypeId,
        updatedBy: newClientData.updatedBy,
        updatedAt: newClientData.updatedAt,
      },
    });
    return clients;
  }

  async remove(id: number) {
    const deletedClient = await this.prismaService.client.delete({
      where: { id: id },
    });
    return deletedClient;
  }
}
