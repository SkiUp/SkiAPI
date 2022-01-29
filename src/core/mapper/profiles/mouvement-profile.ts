import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile, mapFrom, mapWith } from '@automapper/core';

import {
  ExerciseDto,
  Exercise,
  Mouvement,
  MouvementDto,
  MouvementUpsertDto,
} from '@core/data';

@Injectable()
export class MouvementProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  public mapProfile(): MappingProfile {
    return (mapper: Mapper) => {
      mapper
        .createMap(Mouvement, MouvementDto)
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
          (dst) => dst.mouvementCategory,
          mapFrom((src) => src.mouvementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        )

      mapper
        .createMap(MouvementDto, Mouvement)
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
          (dst) => dst.mouvementCategory,
          mapFrom((src) => src.mouvementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        );

      mapper
        .createMap(MouvementUpsertDto, Mouvement)

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
          (dst) => dst.mouvementCategory,
          mapFrom((src) => src.mouvementCategory),
        )
        .forMember(
          (dst) => dst.startLevelId,
          mapFrom((src) => src.startLevelId),
        );
    };
  }
}
