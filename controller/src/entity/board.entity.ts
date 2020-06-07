import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { User } from "./user.entity";
import { Todo } from "./todo.entity";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;

    @ManyToOne(type => User, owner => owner.ownedBoards, {nullable: false})
    owner: User;

    @ManyToMany(type => User, attendee => attendee.attendedBoards)
    @JoinTable()
    attendees: User[];

    @OneToMany(type => Todo, todo => todo.board, {
        cascade:["remove", "update"]
    })
    todos: Todo[];

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
