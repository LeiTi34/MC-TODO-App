import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Board } from 'src/entity/board.entity';
import { Connection, getConnection } from 'typeorm';

@Injectable()
export class BoardsService {
        constructor(private connection: Connection) {};
    userRepository = this.connection.getRepository(User);
    boardRepository = this.connection.getRepository(Board);
  
    async find(user:User) : Promise<Board[]> {
        const currentUser = await this.userRepository.findOne(user.id);
        var boards = await this.boardRepository.find({owner: currentUser});
        return boards;
    }

    async save(user: User, board: Board): Promise<Board> {
        const currentUser = await this.userRepository.findOne(user.id);
        board.owner = currentUser;
        return await this.boardRepository.save(board);
    }

    async remove(user: User, board: Board) : Promise<boolean> {
        let currentBoard = await this.boardRepository.findOne(board.id, {relations: ["owner"]});
        //Nur owner darf löschen
        if(currentBoard?.owner.id === user.id) {
            await this.boardRepository.remove(board);
            return true;
        }
        else return false;
    }

    async update(user: User, board: Board) : Promise<boolean> {
        let currentBoard = await this.boardRepository.findOne(board.id, {relations: ["owner"]});
        //Nur owner darf ändern
        if(currentBoard?.owner.id === user.id) {
            currentBoard.name = board.name;
            await this.boardRepository.update(board.id, {name: board.name})
            return true;
        }
        else return false;
    }
}
