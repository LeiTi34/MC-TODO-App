import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { BoardService } from 'src/board/board.service';
import { Board } from 'src/entity/board.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly connection: Connection,
    private readonly boadService: BoardService,
  ) {}
  repository = this.connection.getRepository(User);

  async findOne(username: string): Promise<User | undefined> {
    return await this.repository.findOne({
      select: ['id', 'username', 'password', 'createdDate', 'updateDate'],
      where: { username: username },
    });
  }

  async save(user: User): Promise<User | undefined> {
    if ((await this.repository.findOne({ username: user.username })) !== null) {
      const newUser = await this.repository.save(user);
      this.boadService.save(newUser, { name: 'Default' } as Board);
      return newUser;
    } else throw new UnauthorizedException();
  }
}
