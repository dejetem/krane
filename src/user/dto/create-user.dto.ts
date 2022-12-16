import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  highscore: number;
}
