import {
  Controller,
  UseGuards,
  Post,
  Request,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TodoService } from './todo.service';
import { Todo } from 'src/entity/todo.entity';
import { User } from 'src/entity/user.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Request() req: any): Promise<Todo> {
    return await this.todoService.save(req.user as User, req.body as Todo);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req: any, @Param('id') id: number): Promise<Todo> {
    return await this.todoService.findOne(req.user as User, id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    const todo = req.body as Todo;
    todo.id = id;
    return await this.todoService.update(req.user as User, todo);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    return await this.todoService.remove(req.user as User, id);
  }
}
