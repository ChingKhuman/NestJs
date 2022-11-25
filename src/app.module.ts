import { Module } from '@nestjs/common';

import { join } from 'path';
import { PetsModule } from './pets/pets/pets.module';
import { PetsResolver } from './pets/pets/pets.resolver';
import { PetsService } from './pets/pets/pets.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { CrudModule } from './crud/crud.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: true,
    }),
    CrudModule,
    PrismaModule,
  ],
})
export class AppModule {}
