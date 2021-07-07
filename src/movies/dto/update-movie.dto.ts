import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true }) //유효성 검사를 해주는것
//   readonly genres?: string[];
// }
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
