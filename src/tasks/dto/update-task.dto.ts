import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../entities/task.entity';
import {IsString, IsNotEmpty, MinLength, IsOptional, IsIn} from 'class-validator'

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @MinLength(10)
    title?: string;
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    description?: string;
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @IsIn([TaskStatus.PENDDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}
