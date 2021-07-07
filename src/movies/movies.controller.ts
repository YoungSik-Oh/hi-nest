import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies') // 라우터
export class MoviesController {
  // 수동으로 import하는 것이 아닌 constructor
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  //@Get 밑에 다른 decorator get들이 있다면 작동을 하지 않는다.
  //search 부분이 get보다 밑에 있으면 NestJS는 search는 id로 판단한다.
  // @Get('search')
  // //무엇을 얻으려면 요청을해야한다 ex) @Query, @Body라던지..
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after:${searchingYear}`;
  // }

  @Get(':id')
  // parameter id라는 값을 가지고오고 싶고 그것을 movieId에 저장을한다.@Get의 이름과 @Param의 이름은 같아야한다.
  //:Movie는 type을 지정한다. -- Movie를 return 한다.
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    //create를 할때는  @Body를 사용한다. (jsondata가 아닌... data를 가져 올 때?)
    //
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
