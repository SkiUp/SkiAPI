import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from '@app/app.service';
import { Asset, Exercise, Level, Movement } from '@core/data/models';
import { MapperModule } from '@core/mapper/mapper.module';
import { TheoryModule } from '@features/theory/theory.module';
import { TheoryFactory } from './core/factories/theory/theory.factory';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `nest.env`,
    }),
    MapperModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql' | 'mariadb' ,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Level, Exercise, Asset, Movement],
      synchronize: true,
      cache:false
    }),
    TheoryModule,
  ],
  providers: [AppService, TheoryFactory],
})
export class AppModule {}
