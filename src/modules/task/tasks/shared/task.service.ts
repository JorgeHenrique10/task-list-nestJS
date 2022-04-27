import { Injectable } from '@nestjs/common';
// import { Task } from './task';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Task[] | null> {
        return this.prisma.task.findMany();
    }
    async getById(id: number): Promise<Task | null> {
        let task = this.prisma.task.findFirst({ where: { id: id } });
        return task;
    }
    async create(task: Task): Promise<Task> {
        let task_new = await this.prisma.task.create({ data: task });

        return task_new;
    }
    async update(task: Task): Promise<Task> {
        await this.prisma.task.update({
            where: { id: task.id },
            data: {
                description: task.description,
                completed: task.completed
            }
        })
        return task;
    }
    async delete(id: number): Promise<Task> {
        let index = this.prisma.task.delete({ where: { id: id } })
        return index;
    }
}
