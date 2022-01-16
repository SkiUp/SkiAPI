import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { LevelProfile } from './profiles/level-profile';

@Module({
  providers: [LevelProfile],
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'classMapper', pluginInitializer: classes }],
      singular: true,
    }),
  ],
})
export class MapperModule {}
