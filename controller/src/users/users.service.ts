import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {};

  async findOne(username: string): Promise<User | undefined> {

    return await this.connection.getRepository(User).findOne({username: username});
  }
}