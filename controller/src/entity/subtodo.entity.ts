import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Todo } from "./todo.entity";

@Entity()
export class SubTodo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    title: string;

    @Column({
        nullable: false,
    })
    isDone: boolean;

    @ManyToOne(type => Todo, todo => todo.subTodos, {nullable: false})
    todo: Todo;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
