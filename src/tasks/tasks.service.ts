import { Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  //simula una db
  private tasks: Task[] = [
    {
      id: '1',
      title: 'hols task',
      description: 'mi description',
      status: TaskStatus.PENDDING,
    },
  ];

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDDING,
    };

    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    const task = this.getTask(id);
    const newTask = Object.assign(task, updateTaskDto);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(id: string) {
    return (this.tasks = this.tasks.filter((task) => task.id != id));
  }
}
