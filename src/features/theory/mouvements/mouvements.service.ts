import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

import { MouvementUpsertDto, MouvementRepository, Mouvement } from '@core/data';
import { Mapper } from '@automapper/core';

@Injectable()
export class MouvementsService {
  constructor(
    private _mouvementRepository: MouvementRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}

  public create(createMouvementDto: MouvementUpsertDto) {
    const mouvement = this._mapper.map(createMouvementDto, Mouvement, MouvementUpsertDto);
    return this._mouvementRepository.createMouvement(mouvement);
  }

  public findAll() {
    return `This action returns all mouvements`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} mouvement`;
  }

  public update(id: number, updateMouvementDto: unknown) {
    return `This action updates a #${id} mouvement`;
  }

  public remove(id: number) {
    return `This action removes a #${id} mouvement`;
  }
}
