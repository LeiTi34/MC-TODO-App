import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtodoService } from 'src/subtodo/subtodo.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [TodoService, SubtodoService],
  controllers: [TodoController],
})
export class TodoModule {}
