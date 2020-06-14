import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  BaseEntity,
} from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
    select: false,
  })
  password: string;

  @OneToMany(
    () => Board,
    owendBoard => owendBoard.owner,
    {
      cascade: ['remove', 'update'],
    },
  )
  ownedBoards: Board[];

  @ManyToMany(
    () => Board,
    attendedBoard => attendedBoard.attendees,
  )
  attendedBoards: Board[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
