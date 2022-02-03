import { Injectable } from '@nestjs/common'
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs'
import { Mapper, MappingProfile, mapFrom } from '@automapper/core'

import { Movement, MovementDto, MovementUpsertDto } from '@core/data'

@Injectable()
export class MovementProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  public mapProfile(): MappingProfile {
    return (mapper: Mapper) => {
      mapper
        .createMap(Movement, MovementDto)
        .forMember(
          (dst) => dst.id,
          mapFrom((src) => src.id),
        )
        .forMember(
          (dst) => dst.name,
          mapFrom((src) => src.name),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.movementCategory,
          mapFrom((src) => src.movementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        )

      mapper
        .createMap(MovementDto, Movement)
        .forMember(
          (dst) => dst.id,
          mapFrom((src) => src.id),
        )
        .forMember(
          (dst) => dst.name,
          mapFrom((src) => src.name),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.movementCategory,
          mapFrom((src) => src.movementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        )

      mapper
        .createMap(MovementUpsertDto, Movement)

        .forMember(
          (dst) => dst.name,
          mapFrom((src) => src.name),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.movementCategory,
          mapFrom((src) => src.movementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        )
    }
  }
}
