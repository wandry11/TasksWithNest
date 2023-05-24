import {IsString, IsNotEmpty, MinLength} from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    title: string;
    @IsString()
    description: string;
}
