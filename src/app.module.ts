import { UsersModule } from './modules/user/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { PrismaModule } from './modules/prisma/prisma.module';



@Module({
  imports: [
    UsersModule,
    AuthModule, TaskModule, PrismaModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
