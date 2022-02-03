import { InjectMapper } from '@automapper/nestjs'
import { Injectable } from '@nestjs/common'

import { MovementUpsertDto, MovementRepository, Movement } from '@core/data'
import { Mapper } from '@automapper/core'

@Injectable()
export class MovementsService {
  constructor(
    private _movementRepository: MovementRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}

  public create(createMovementDto: MovementUpsertDto) {
    const movement = this._mapper.map(
      createMovementDto,
      Movement,
      MovementUpsertDto,
    )
    return this._movementRepository.createMovement(movement)
  }

  public findAll() {
    return `This action returns all movements`
  }

  public findOne(id: number) {
    return `This action returns a #${id} movement`
  }

  public update(id: number, updateMovementDto: unknown) {
    return `This action updates a #${id} movement`
  }

  public remove(id: number) {
    return `This action removes a #${id} movement`
  }
}
