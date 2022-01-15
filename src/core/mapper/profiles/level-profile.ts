import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile, mapFrom, mapWith } from '@automapper/core';

import { Level, LevelDto, ExerciseDto, Exercise } from '@core/data';

@Injectable()
export class LevelProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  public mapProfile(): MappingProfile {
    return (mapper: Mapper) => {
      mapper
        .createMap(Level, LevelDto)
        .forMember(
          dst => dst.id,
          mapFrom(src => src.id),
        )
        .forMember(
          dst => dst.name,
          mapFrom(src => src.name),
        )
        .forMember(
          dst => dst.description,
          mapFrom(src => src.description),
        )
        .forMember(
          dst => dst.priorLevelId,
          mapFrom(src => src.priorLevelId),
        )
        .forMember(
          dst => dst.exercises,
          mapWith(ExerciseDto, Exercise, src => src.exercises),
        );

      mapper
        .createMap(LevelDto, Level)
        .forMember(
          dst => dst.id,
          mapFrom(src => src.id),
        )
        .forMember(
          dst => dst.name,
          mapFrom(src => src.name),
        )
        .forMember(
          dst => dst.description,
          mapFrom(src => src.description),
        )
        .forMember(
          dst => dst.priorLevelId,
          mapFrom(src => src.priorLevelId),
        ) .forMember(
            dst => dst.exercises,
            mapWith(Exercise, ExerciseDto, src => src.exercises),
          );
    };
  }
}
