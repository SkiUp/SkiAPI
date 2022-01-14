import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLevelDto, UpdateLevelDto } from '../../core/entities/DTO/levels';

import { Level } from '../../core/entities/models';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private levelsRepository: Repository<Level>,
  ) {}

  public create(createLevelDto: CreateLevelDto): Level {
    return this.levelsRepository.create()
  }
  public findOne(levelId: string): Promise<Level> {
    return this.levelsRepository.findOne(levelId);
  }

  public findAll(): Promise<Level[]> {
    return this.levelsRepository.find({ relations: ['exercices'] });
  }

  public update(
    levelId: string,
    levelUpdateDto: UpdateLevelDto,
  ): Promise<Level> {
    throw new Error('Method not implemented.');
  }

  public remove(levelId: string): boolean {
    throw new Error('Method not implemented.');
  }
}
