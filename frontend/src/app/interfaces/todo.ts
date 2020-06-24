import { SubTodo } from './sub-todo';

export interface Todo {
    position: number;
    title: string;
    isDone: boolean;
    note?: string;
    subTodos?: SubTodo[];
    reminderDate?: Date;
    dueDate?: Date;
    repeatInterval?: string;
    createdDate: Date;
    updateDate: Date;
}
