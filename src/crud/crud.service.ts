import { Injectable } from '@nestjs/common';
import { CreateCrudInput } from './dto/create-crud.input';
import { UpdateCrudInput } from './dto/update-crud.input';

@Injectable()
export class CrudService {
  findOneById(id: number) {
    throw new Error('Method not implemented.');
  }
  create(createCrudInput: CreateCrudInput) {
    return 'This action adds a new crud';
  }

  findAll() {
    return `This action returns all crud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crud`;
  }

  update(id: number, updateCrudInput: UpdateCrudInput) {
    return `This action updates a #${id} crud`;
  }

  remove(id: number) {
    return `This action removes a #${id} crud`;
  }
}
