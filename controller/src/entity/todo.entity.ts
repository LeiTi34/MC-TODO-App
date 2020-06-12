import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  BaseEntity,
  Unique,
} from 'typeorm';
import { Board } from './board.entity';
import { SubTodo } from './subtodo.entity';
import { Attachment } from './attachment.entity';

enum RepeatInterval {
  None,
  Daily,
  Weekly,
  Monthly,
  Yearly,
}

@Entity()
@Unique(['position', 'board'])
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
    default: false,
  })
  isDone: boolean;

  @Column({ nullable: true })
  note: string;

  @OneToMany(
    type => SubTodo,
    subTodo => subTodo.todo,
    {
      cascade: ['remove', 'update'],
    },
  )
  subTodos: SubTodo[];

  @OneToOne(
    type => Attachment,
    attachment => attachment.todo,
    {
      cascade: ['remove', 'update'],
    },
  )
  attachment: Attachment;

  @Column({ nullable: true })
  reminderDate: Date;

  @Column({ nullable: true })
  dueDate: Date;

  @Column('enum', { enum: RepeatInterval, default: RepeatInterval.None })
  repeatInterval: RepeatInterval;

  @ManyToOne(
    type => Board,
    board => board.todos,
    { nullable: false },
  )
  board: Board;

  @Column({ nullable: false })
  position: Number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
