import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async findOne(email: string): Promise<User | undefined> {
        return await this.prisma.user.findFirst({
            where: { email }
        });
    }

    async create(user: User): Promise<User> {
        return await this.prisma.user.create({ data: user });
    }

}