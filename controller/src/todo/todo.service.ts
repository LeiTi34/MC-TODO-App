import { Injectable } from '@nestjs/common';
import { Todo } from 'src/entity/todo.entity';
import { Board } from 'src/entity/board.entity';
import { Connection, MoreThan } from 'typeorm';
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

      todos = todos.sort((a, b) => {
        if (a.position > b.position) return 1;
        if (a.position < b.position) return -1;
        return 0;
      });

      for (const t of todos) {
        let newT = t;
        newT.position = (newT.position as number)--;
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

  async changePosition(
    user: User,
    id: number,
    newPosition: number,
  ): Promise<Board> {
    const currentTodo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: id },
    });

    if (currentTodo?.board?.owner?.id == user.id) {
      const currentBoard = await this.boardRepository.findOne({
        relations: ['todos'],
        where: { id: currentTodo.id },
      });
    }
    return null;
  }
}
