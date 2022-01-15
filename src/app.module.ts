import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { Asset, Exercise, Level, Mouvement } from '@core/data/models';
import { LevelsModule } from './features/levels/levels.module';
import { MapperModule } from './core/mapper/mapper.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.15',
      port: 3306,
      username: 'user',
      password: 'passw0rd',
      database: 'skiv3',
      entities: [Level, Exercise, Asset, Mouvement],
      synchronize: true,
    }),
    LevelsModule,
    MapperModule,
  ],
  providers: [AppService],
})
export class AppModule {}
