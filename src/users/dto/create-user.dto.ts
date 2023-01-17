import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'user email' })
  @IsString({ message: 'should be a string' })
  @IsEmail({}, { message: 'invalid email' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'user password' })
  @IsString({ message: 'should be a string' })
  @Length(4, 20, { message: 'should be no less than 4 and no more than 20' })
  readonly password: string;
}
