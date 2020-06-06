import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {};
  repository = this.connection.getRepository(User);

  async findOne(username: string): Promise<User | undefined> {

    return await this.repository.findOne({username: username});
  }

  async save(user: User): Promise<User | undefined> {

    if (await this.repository.findOne({username: user.username}) !== null)
        return await this.repository.save(user);
    else throw new UnauthorizedException();
  }
}