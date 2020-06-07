import { Controller, UseGuards, Get, Request, Post, Put, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BoardsService } from './boards.service';
import { Board } from 'src/entity/board.entity';
import { User } from 'src/entity/user.entity';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async find(@Request() req) : Promise<Board[]>{
      return await this.boardsService.find(req.user as User);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Request() req):Promise<Board>{
      return await this.boardsService.save(req.user as User, req.body as Board)
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Request() req):Promise<boolean>{
      return await this.boardsService.update(req.user as User, req.body as Board)
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async remove(@Request() req):Promise<boolean>{
      return await this.boardsService.remove(req.user as User, req.body as Board)
  }
}
