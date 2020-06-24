import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Connection } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { BoardService } from 'src/board/board.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, BoardService],
  exports: [UserService],
})
export class UserModule {}
