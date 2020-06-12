import { Injectable } from '@nestjs/common';
import { Todo } from 'src/entity/todo.entity';
import { Board } from 'src/entity/board.entity';
import { Connection } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class TodosService {
  constructor(private connection: Connection) {}

  todoRepository = this.connection.getRepository(Todo);
  boardRepository = this.connection.getRepository(Board);

  async save(user: User, todo: Todo): Promise<Todo> {
    const currentBoard = await this.boardRepository.findOne({
      relations: ['owner'],
      where: { id: todo.board.id, owner: { id: user.id } },
    });
    todo.board = currentBoard;
    return await this.todoRepository.save(todo);
  }

  async remove(user: User, id: number): Promise<boolean> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: id },
    });

    if (currentTodo?.board?.owner?.id == user.id) {
      await this.todoRepository.remove(currentTodo);
      return true;
    }
    return false;
  }

  async update(user: User, todo: Todo): Promise<boolean> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: todo.id },
    });
    console.log(currentTodo);

    if (currentTodo?.board?.owner?.id == user.id) {
      await this.todoRepository.update(currentTodo.id, currentTodo);
      return true;
    }
    return false;
  }

  async findOne(user: User, id: number): Promise<Todo> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: id },
    });
    if (currentTodo?.board?.owner?.id == user.id) {
      delete currentTodo.board;
      return currentTodo;
    }
    return null;
  }
}
