import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { TodoModule } from './todo/todo.module';
import { AttachmentModule } from './attachment/attachment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    BoardModule,
    TodoModule,
    AttachmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //constructor(private connection: Connection) {}
}
