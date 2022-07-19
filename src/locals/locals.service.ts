import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { Local } from './entities/local.entity';

@Injectable()
export class LocalsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLocalDto: CreateLocalDto) {
    const local = new Local(
      createLocalDto.name,
      createLocalDto.createBy,
      createLocalDto.updatedBy,
    ).get();

    const localCreated = await this.prismaService.local.create({
      data: local,
    });
    return localCreated;
  }

  async findAll() {
    const locals = await this.prismaService.local.findMany();
    return locals;
  }

  async findOne(id: number) {
    const local = await this.prismaService.local.findFirst({
      where: {
        id: id,
      },
    });

    return local;
  }

  async update(id: number, updateLocalDto: UpdateLocalDto) {
    const local = await this.findOne(id);

    if (!local) {
      throw new Error(`Local not found`);
    }

    const localInstantiated = new Local(
      updateLocalDto.name,
      local.createBy,
      updateLocalDto.updatedBy,
      local.createdAt,
    ).get();

    const locals = await this.prismaService.local.updateMany({
      where: {
        id: id,
      },
      data: {
        name: localInstantiated.name,
        updatedBy: localInstantiated.updatedBy,
      },
    });
    return locals;
  }

  async remove(id: number) {
    const deletedLocal = await this.prismaService.local.delete({
      where: { id: id },
    });
    return deletedLocal;
  }
}
