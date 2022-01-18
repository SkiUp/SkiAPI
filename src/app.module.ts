import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from '@app/app.service';
import { Asset, Exercise, Level, Mouvement } from '@core/data/models';
import { MapperModule } from '@core/mapper/mapper.module';
import { TheoryModule } from '@features/theory/theory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `nest.env`,
    }),
    MapperModule,
    TypeOrmModule.forRoot({
      ...JSON.parse(process.env.NEST_CONFIG).dbConfig,
      entities: [Level, Exercise, Asset, Mouvement],
      synchronize: true,
    }),
    TheoryModule,
  ],
  providers: [AppService],
})
export class AppModule {}
