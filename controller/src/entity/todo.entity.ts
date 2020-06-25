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
    () => SubTodo,
    subTodo => subTodo.todo,
    {
      cascade: ['remove', 'update'],
    },
  )
  subTodos: SubTodo[];

  @OneToOne(
    () => Attachment,
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

  //@Column('enum', { enum: RepeatInterval, default: RepeatInterval.None })
  //repeatInterval: RepeatInterval;

  @Column({ nullable: true })
  repeatInterval: string;

  @ManyToOne(
    () => Board,
    board => board.todos,
    { nullable: false },
  )
  board: Board;

  @Column({ nullable: false })
  position: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
