import { Todo } from './todo';
import { User } from './user';

export interface Board {
    name: string;
    todos: Todo[];
    //members: User[];
}
