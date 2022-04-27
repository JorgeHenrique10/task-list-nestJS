import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { Task } from '@prisma/client';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { TaskService } from './shared/task.service';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TaskService) { }

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskService.getAll();
    }
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.getById(id);
    }
    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }
    @Put(':id')
    async update(@Body() task: Task, @Param('id', ParseIntPipe) id: number): Promise<Task> {
        task.id = id;
        return this.taskService.update(task);
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.delete(id)
    }
}
