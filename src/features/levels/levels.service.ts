import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Level } from '../../core/entities/models';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private levelsRepository: Repository<Level>,
  ) {}

  public findAll(): Promise<Level[]> {
    return this.levelsRepository.find({ relations: ['exercices'] });
  }

  public async findOne(id: number): Promise<Level> {
    return this.levelsRepository.findOneOrFail({
      where: { levelId: id },
      relations: ['exercices'],
    });
  }

  public async findMany(levelIds: number[]): Promise<Level[]> {
    return this.levelsRepository.find({ where: { levelId: In(levelIds) } });
  }

  // public async getNextLevel(ID: number): Promise<number> {
  //   return (
  //     await this.levelsRepository.findOneOrFail({ where: { levelId: ID } })
  //   ).nextLevelId;
  // }

  // public async getPrevLevel(ID: number): Promise<number> {
  //   return (
  //     await this.levelsRepository.findOneOrFail({ where: { nextLevelIdr: ID } })
  //   ).levelId;
  // }
}
