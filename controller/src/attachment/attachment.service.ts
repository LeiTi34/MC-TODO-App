import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Attachment } from 'src/entity/attachment.entity';
import { Todo } from 'src/entity/todo.entity';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AttachmentService {
  constructor(private connection: Connection) {}

  todoRepository = this.connection.getRepository(Todo);
  attachmentRepository = this.connection.getRepository(Attachment);

  async save(
    user: User,
    id: number,
    attachment: Attachment,
  ): Promise<Attachment> {
    const todo = await this.todoRepository.findOne({
      relations: ['board', 'board.owner'],
      where: { id: id },
    });
    if (todo?.board?.id == user.id) {
      attachment.todo = todo;
      let result = await this.attachmentRepository.save(attachment);
      delete result.data;
      delete result.todo.board;
      return result;
    }
    return null;
  }

  async remove(user: User, id: number): Promise<boolean> {
    const currentAttachment = await this.attachmentRepository.findOne({
      relations: ['todo', 'todo.board', 'todo.board.owner'],
      where: { todo: { id: id } },
    });
    if (currentAttachment?.todo?.board?.owner?.id == user.id) {
      this.attachmentRepository.delete(currentAttachment);
      return true;
    }
    return false;
  }

  async findOne(user: User, id: number): Promise<Attachment> {
    const currentAttachment = await this.attachmentRepository.findOne({
      select: ['id', 'name', 'mimeType', 'data'],
      relations: ['todo', 'todo.board', 'todo.board.owner'],
      where: { todo: { id: id } },
    });
    if (currentAttachment?.todo?.board?.owner?.id == user.id) {
      delete currentAttachment.todo;
      return currentAttachment;
    }
    return null;
  }
}
