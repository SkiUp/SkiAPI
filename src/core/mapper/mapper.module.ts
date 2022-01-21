import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ExerciseProfile, LevelProfile } from './profiles';

@Module({
  providers: [LevelProfile, ExerciseProfile],
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'classMapper', pluginInitializer: classes }],
      singular: true,
    }),
  ],
})
export class MapperModule {}
