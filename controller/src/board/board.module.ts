import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TodoService } from 'src/todo/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [BoardController],
  providers: [BoardService, TodoService],
})
export class BoardModule {}
