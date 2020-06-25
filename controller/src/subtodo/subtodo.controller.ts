import {
  Controller,
  Get,
  Param,
  UseGuards,
  Post,
  Put,
  Request,
  Delete,
} from '@nestjs/common';
import { SubtodoService } from './subtodo.service';
import { User } from 'src/entity/user.entity';
import { Todo } from 'src/entity/todo.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubTodo } from 'src/entity/subtodo.entity';

@Controller('subtodo')
export class SubtodoController {
  constructor(private readonly subtodoService: SubtodoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Request() req: any): Promise<SubTodo> {
    return await this.subtodoService.save(
      req.user as User,
      req.body as SubTodo,
    );
  }

  //@UseGuards(JwtAuthGuard)
  //@Get(':id')
  //async findOne(@Request() req: any, @Param('id') id: number): Promise<Todo> {
  //return await this.subtodoService.findOne(req.user as User, id);
  //}

  //@UseGuards(JwtAuthGuard)
  //@Put(':id')
  //async update(@Request() req: any, @Param('id') id: number): Promise<boolean> {
  //const todo = req.body as Todo;
  //todo.id = id;
  //return await this.subtodoService.update(req.user as User, todo);
  //}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    return await this.subtodoService.remove(req.user as User, id);
  }
}
