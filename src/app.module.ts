import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { Asset, Exercise, Level, Mouvement } from '@core/data/models';
import { MapperModule } from '@core/mapper/mapper.module';
import { LevelsModule } from '@features/levels/levels.module';


const ENVIRONEMENT = JSON.parse(process.env.NEST_CONFIG)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `${process.env.NEST_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      ...ENVIRONEMENT.db_config,
      entities: [Level, Exercise, Asset, Mouvement],
      synchronize: true,
    }),
    LevelsModule,
    MapperModule,
  ],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(process.env.NEST_ENV)
  }
}
