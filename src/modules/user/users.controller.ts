/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private usersServices: UsersService) { }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersServices.create(user);
    }
}
