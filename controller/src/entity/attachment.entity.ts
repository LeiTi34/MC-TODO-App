import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import { Todo } from "./todo.entity";

@Entity()
export class Attachment{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Todo, todo => todo.attachment, {nullable: false})
    @JoinColumn()
    todo: Todo;

    @Column()
    name: string;

    @Column({
        type: "bytea"
    })
    data: Buffer;

    @Column()
    mimeType:string;
}