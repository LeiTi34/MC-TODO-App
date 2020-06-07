import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    //constructor(private connection: Connection) {}
}
