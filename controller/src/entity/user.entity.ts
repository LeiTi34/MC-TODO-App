import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany} from "typeorm";
import { Board } from "./board.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        nullable: false,
    })
    username: string;

    @Column({
        nullable: false,
    })
    password: string;

    @OneToMany(type => Board, owendBoard => owendBoard.owner, {
        cascade:["remove", "update"]
    })
    ownedBoards: Board[];

    @ManyToMany(type => Board, attendedBoard => attendedBoard.attendees)
    attendedBoards: Board[]

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
