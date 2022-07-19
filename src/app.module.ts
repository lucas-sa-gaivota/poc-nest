import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { LocalsModule } from './locals/locals.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [PeopleModule, LocalsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
