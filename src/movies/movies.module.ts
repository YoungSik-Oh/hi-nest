import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], // 이렇게하면 NestJS가 알아서 import해준다.
  providers: [MoviesService],
})
export class MoviesModule {}
