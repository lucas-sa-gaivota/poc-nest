import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { AuthMiddleware } from 'src/middleware/auth.middleware';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService, AuthMiddleware],
})
export class ClientsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'clients', method: RequestMethod.GET });
  }
}
