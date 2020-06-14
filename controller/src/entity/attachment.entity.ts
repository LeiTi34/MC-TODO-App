import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class Attachment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    () => Todo,
    todo => todo.attachment,
    { nullable: false },
  )
  @JoinColumn()
  todo: Todo;

  @Column()
  name: string;

  @Column({
    type: 'bytea',
    select: false,
  })
  data: Buffer;

  @Column()
  mimeType: string;
}

