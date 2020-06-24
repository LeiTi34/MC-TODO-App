import { Todo } from './todo';
import { User } from './user';

export interface Board {
  name: string;
  id: number;
  todos: Todo[];
  //members: User[];
}
