import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { setRedis } from 'src/infra/redis/redis.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPersonDto: CreatePersonDto) {
    const people = new Person(
      createPersonDto.name,
      createPersonDto.documentNumber,
      createPersonDto.createBy,
      createPersonDto.updatedBy,
    );

    const data = await this.prismaService.people.create({
      data: people.get(),
    });
    await setRedis(`people-all`, null);
    return data;
  }

  async findAll() {
    const persons = await this.prismaService.people.findMany();
    await setRedis('people-all', JSON.stringify(persons));
    return persons;
  }

  async findOne(id: number) {
    const person = await this.prismaService.people.findFirst({
      where: {
        id: id,
      },
    });
    await setRedis(`people-${id}`, JSON.stringify(person));
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const people = await this.findOne(updatePersonDto.id);

    if (!people) {
      throw new Error(`Person not found`);
    }

    const newPeopleData = new Person(
      updatePersonDto.name,
      updatePersonDto.documentNumber,
      people.createBy,
      updatePersonDto.updatedBy,
      updatePersonDto.clientId,
    ).get();

    const persons = await this.prismaService.people.updateMany({
      where: {
        id: id,
      },
      data: {
        name: newPeopleData.name,
        documentNumber: newPeopleData.documentNumber,
        updatedBy: newPeopleData.updatedBy,
        updatedAt: newPeopleData.updatedAt,
        clientId: newPeopleData.clientId,
      },
    });
    await setRedis(`people-${id}`, null);
    return persons;
  }

  async remove(id: number) {
    const deletedPeople = await this.prismaService.people.delete({
      where: { id: id },
    });
    return deletedPeople;
  }
}
