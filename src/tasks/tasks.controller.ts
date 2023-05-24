import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    console.log(this.tasksService.getTasks());
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description)
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
