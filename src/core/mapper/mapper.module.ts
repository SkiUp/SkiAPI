import { Module } from '@nestjs/common';
import { LevelProfile } from './profiles/level-profile';

@Module({
  providers: [LevelProfile],
  exports: [],
  imports: [],
})
export class MapperModule {}
