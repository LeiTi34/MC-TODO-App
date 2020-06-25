import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Todo } from 'src/entity/todo.entity';
import { Board } from 'src/entity/board.entity';
import { User } from 'src/entity/user.entity';
import { SubTodo } from 'src/entity/subtodo.entity';

@Injectable()
export class SubtodoService {
  constructor(private connection: Connection) {}

  todoRepository = this.connection.getRepository(Todo);
  subTodoRepository = this.connection.getRepository(SubTodo);
  boardRepository = this.connection.getRepository(Board);

  async save(user: User, subTodo: SubTodo): Promise<SubTodo> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: {
        id: subTodo.todo.id,
        //board: { owner: { id: user.id } }, //TODO owner checken
      },
    });
    subTodo.todo = currentTodo;
    return await this.subTodoRepository.save(subTodo);
  }

  async remove(user: User, id: number): Promise<boolean> {
    const currentSubTodo = await this.subTodoRepository.findOne({
      relations: ['todo', 'todo.board', 'todo.board.owner'],
      where: { id: id },
    });

    if (currentSubTodo?.todo?.board?.owner?.id == user.id) {
      await this.subTodoRepository.remove(currentSubTodo);
      return true;
    }
    return false;
  }

  //async update(user: User, todo: Todo): Promise<boolean> {
  //const currentTodo = await this.todoRepository.findOne({
  //relations: ['board', 'board.owner'],
  //where: { id: todo.id },
  //});
  //console.log(currentTodo);

  //if (currentTodo?.board?.owner?.id == user.id) {
  //await this.todoRepository.update(currentTodo.id, currentTodo);
  //return true;
  //}
  //return false;
  //}

  //async findOne(user: User, id: number): Promise<Todo> {
  //const currentTodo = await this.todoRepository.findOne({
  //relations: ['board', 'board.owner'],
  //where: { id: id },
  //});
  //if (currentTodo?.board?.owner?.id == user.id) {
  //delete currentTodo.board;
  //return currentTodo;
  //}
  //return null;
  //}
}
