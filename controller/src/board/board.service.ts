import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Board } from 'src/entity/board.entity';
import { Connection } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(private connection: Connection) {}
  userRepository = this.connection.getRepository(User);
  boardRepository = this.connection.getRepository(Board);

  async find(user: User): Promise<Board[]> {
    let boards = await this.boardRepository.find({
      //select: ['id', 'name', 'createdDate', 'updateDate'],
      relations: ['owner', 'attendees', 'todos', 'todos.subTodos'],
      where: [
        { owner: { id: user.id } },
        //{ attendees: { id: user.id } } //TODO attendees
      ],
    });
    console.log('test');
    console.log(boards);
    return boards;
  }

  async save(user: User, board: Board): Promise<Board> {
    const currentUser = await this.userRepository.findOne(user.id);
    board.owner = currentUser;
    return await this.boardRepository.save(board);
  }

  async remove(user: User, board: Board): Promise<boolean> {
    let currentBoard = await this.boardRepository.findOne(board.id, {
      relations: ['owner'],
    });
    //Nur owner darf löschen
    if (currentBoard?.owner.id === user.id) {
      await this.boardRepository.remove(board);
      return true;
    } else return false;
  }

  async update(user: User, board: Board): Promise<boolean> {
    let currentBoard = await this.boardRepository.findOne(board.id, {
      relations: ['owner'],
    });
    //Nur owner darf ändern
    if (currentBoard?.owner.id === user.id) {
      currentBoard.name = board.name;
      await this.boardRepository.update(board.id, { name: board.name });
      return true;
    } else return false;
  }

  async findOne(user: User, id: number): Promise<Board> {
    let board = await this.boardRepository.findOne({
      //select: [
      //'id',
      //'name',
      //'owner',
      //'attendees',
      //'todos',
      //'createdDate',
      //'updateDate',
      //],
      relations: ['owner', 'attendees', 'todos'], //TODO only todo count
      where: [{ id: id, owner: { id: user.id } }],
    });
    return board;
  }
}
