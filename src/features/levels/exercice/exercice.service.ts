import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';

@Injectable()
export class exerciseservice {
  create(createExerciceDto: CreateExerciceDto) {
    return 'This action adds a new exercice';
  }

  public findAll() {
    return `This action returns all exercice`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} exercice`;
  }

  public update(id: number, updateExerciceDto: UpdateExerciceDto) {
    return `This action updates a #${id} exercice`;
  }

  public remove(id: number) {
    return `This action removes a #${id} exercice`;
  }
}
