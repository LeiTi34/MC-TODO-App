import {
  Controller,
  UseGuards,
  Get,
  Request,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BoardService } from './board.service';
import { Board } from 'src/entity/board.entity';
import { User } from 'src/entity/user.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async find(@Request() req): Promise<Board[]> {
    return await this.boardService.find(req.user as User);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Request() req: any): Promise<Board> {
    return await this.boardService.save(req.user as User, req.body as Board);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Request() req): Promise<boolean> {
    return await this.boardService.update(req.user as User, req.body as Board);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async remove(@Request() req): Promise<boolean> {
    return await this.boardService.remove(req.user as User, req.body as Board);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number, @Request() req): Promise<Board> {
    return await this.boardService.findOne(req.user as User, id);
  }
}
