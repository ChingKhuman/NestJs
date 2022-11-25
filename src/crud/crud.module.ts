import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudResolver } from './crud.resolver';

@Module({
  providers: [CrudResolver, CrudService],
})
export class CrudModule {}
