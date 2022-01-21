import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile, mapFrom } from '@automapper/core';

import { ExerciseDto, Exercise, ExerciseUpsertDto } from '@core/data';

@Injectable()
export class ExerciseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  public mapProfile(): MappingProfile {
    return (mapper: Mapper) => {
      mapper
        .createMap(Exercise, ExerciseDto)
        .forMember(
          (dst) => dst.id,
          mapFrom((src) => src.id),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.slopeType,
          mapFrom((src) => src.slopeType),
        )
        .forMember(
          (dst) => dst.type,
          mapFrom((src) => src.type),
        )
        .forMember(
          (dst) => dst.level,
          mapFrom((src) => src.level),
        )
        .forMember(
          (dst) => dst.mouvement,
          mapFrom((src) => src.mouvement),
        )
        .forMember(
          (dst) => dst.isOfficial,
          mapFrom((src) => src.isOfficial),
        )
        .forMember(
          (dst) => dst.asset,
          mapFrom((src) => src.asset),
        );

      mapper
        .createMap(ExerciseDto, Exercise)
        .forMember(
          (dst) => dst.id,
          mapFrom((src) => src.id),
        )
        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.slopeType,
          mapFrom((src) => src.slopeType),
        )
        .forMember(
          (dst) => dst.type,
          mapFrom((src) => src.type),
        )
        .forMember(
          (dst) => dst.level,
          mapFrom((src) => src.level),
        )
        .forMember(
          (dst) => dst.mouvement,
          mapFrom((src) => src.mouvement),
        )
        .forMember(
          (dst) => dst.isOfficial,
          mapFrom((src) => src.isOfficial),
        )
        .forMember(
          (dst) => dst.asset,
          mapFrom((src) => src.asset),
        );

      mapper
        .createMap(ExerciseUpsertDto, Exercise)

        .forMember(
          (dst) => dst.description,
          mapFrom((src) => src.description),
        )
        .forMember(
          (dst) => dst.slopeType,
          mapFrom((src) => src.slopeType),
        )
        .forMember(
          (dst) => dst.type,
          mapFrom((src) => src.type),
        )
        .forMember(
          (dst) => dst.levelId,
          mapFrom((src) => src.levelId),
        )
        .forMember(
          (dst) => dst.mouvementId,
          mapFrom((src) => src.mouvementId),
        )
        .forMember(
          (dst) => dst.isOfficial,
          mapFrom((src) => src.isOfficial),
        )
        .forMember(
          (dst) => dst.asset,
          mapFrom((src) => src.asset),
        );
    };
  }
}
