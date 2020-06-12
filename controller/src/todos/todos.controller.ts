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
import { TodosService } from './todos.service';
import { Todo } from 'src/entity/todo.entity';
import { User } from 'src/entity/user.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Request() req: any): Promise<Todo> {
    return await this.todosService.save(req.user as User, req.body as Todo);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req: any, @Param('id') id: number): Promise<Todo> {
    return await this.todosService.findOne(req.user as User, id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    const todo = req.body as Todo;
    todo.id = id;
    return await this.todosService.update(req.user as User, todo);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    return await this.todosService.remove(req.user as User, id);
  }
}
