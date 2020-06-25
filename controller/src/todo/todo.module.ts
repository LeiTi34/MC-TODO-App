import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtodoService } from 'src/subtodo/subtodo.service';
import { AttachmentService } from 'src/attachment/attachment.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [TodoService, SubtodoService, AttachmentService],
  controllers: [TodoController],
})
export class TodoModule {}
