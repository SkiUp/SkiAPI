import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { LevelsModule } from './features/levels/levels.module';

import { Asset, Exercice, Level, Mouvement } from './core/entities/models';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.15',
      port: 3306,
      username: 'user',
      password: 'passw0rd',
      database: 'skiv3',
      entities: [Exercice, Level, Mouvement, Asset],
      synchronize: true,
    }),
    LevelsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
