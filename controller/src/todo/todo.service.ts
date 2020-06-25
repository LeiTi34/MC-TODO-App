import { Injectable } from '@nestjs/common';
import { Todo } from 'src/entity/todo.entity';
import { Board } from 'src/entity/board.entity';
import { Connection, MoreThan, MoreThanOrEqual, Between } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { SubtodoService } from 'src/subtodo/subtodo.service';
import { isNullOrUndefined } from 'util';
import { AttachmentService } from 'src/attachment/attachment.service';

@Injectable()
export class TodoService {
  constructor(
    private connection: Connection,
    private readonly subtodoService: SubtodoService,
    private readonly attachmentService: AttachmentService,
  ) {}

  todoRepository = this.connection.getRepository(Todo);
  boardRepository = this.connection.getRepository(Board);

  async save(user: User, todo: Todo): Promise<Todo> {
    const currentBoard = await this.boardRepository.findOne({
      relations: ['owner'],
      where: { id: todo.board.id, owner: { id: user.id } },
    });
    todo.board = currentBoard;

    const savedTodo = await this.todoRepository.save(todo);

    todo.subTodos?.forEach(async st => {
      let subTodo = st;
      subTodo.todo = { id: savedTodo.id } as Todo;

      await this.subtodoService.save(user, subTodo);
    });

    return savedTodo;
  }

  async remove(user: User, id: number): Promise<boolean> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner', 'subTodos', 'attachment'],
      where: { id: id },
    });

    const position = currentTodo.position;
    const boardId = currentTodo.board.id;

    if (currentTodo?.board?.owner?.id == user.id) {
      for (const st of currentTodo.subTodos) {
        await this.subtodoService.remove(user, st.id);
      }

      if (!isNullOrUndefined(currentTodo.attachment)) {
        await this.attachmentService.remove(user, currentTodo.attachment.id);
      }

      await this.todoRepository.remove(currentTodo);

      let todos = await this.todoRepository.find({
        relations: ['board'],
        where: { board: { id: boardId }, position: MoreThan(position) },
      });

      todos = todos.sort((a, b) => a.position - b.position);

      for (const t of todos) {
        let newT = t;
        newT.position = newT.position - 1;
        await this.todoRepository.update(newT.id, newT);
      }

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
      const updatedTodo = await this.todoRepository.findOne(todo);

      todo.subTodos?.forEach(async st => {
        let subTodo = st;
        subTodo.todo = { id: updatedTodo.id } as Todo;

        await this.subtodoService.save(user, subTodo);
      });

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

  async updatePos(user: User, id: number, newPosition: number): Promise<Board> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: id },
    });

    if (currentTodo?.board?.owner?.id == user.id) {
      let from: number;
      let to: number;
      if (newPosition > currentTodo.position) {
        to = newPosition;
        from = currentTodo.position;
      } else if (newPosition < currentTodo.position) {
        from = newPosition;
        to = currentTodo.position;
      } else return null;

      let todos = await this.todoRepository.find({
        relations: ['board'],
        where: {
          board: { id: currentTodo.id },
          position: MoreThanOrEqual(from),
        },
      });
      let maxPos: number = 1;
      todos.forEach(t => (maxPos = t.position > maxPos ? t.position : maxPos));
      let tmpTodos: Todo[];
      todos.forEach(t => {
        if (t.position <= to) tmpTodos.push(t);
      });
      tmpTodos = tmpTodos.sort((a, b) => a.position - b.position);

      await this.update(user, currentTodo);
    }
    return null;
  }
}
