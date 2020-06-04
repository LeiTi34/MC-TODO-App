import {Entity, ManyToOne, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne} from "typeorm";
import { Board } from "./board.entity";
import { SubTodo } from "./subtodo.entity";
import { Attachment } from "./attachment.entity";

@Entity()
export class Todo {
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

    @Column()
    note: string;

    @OneToMany(type => SubTodo, subTodo => subTodo.todo, {
        cascade:["remove", "update"]
    })
    subTodos: SubTodo[];

    @OneToOne(type => Attachment, attachment => attachment.todo, {
        cascade:["remove", "update"]
    })
    attachment: Attachment;

    @Column()
    reminderDate: Date

    @Column()
    dueDate: Date

    @ManyToOne(type => Board, board => board.todos, {nullable: false})
    board: Board;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
