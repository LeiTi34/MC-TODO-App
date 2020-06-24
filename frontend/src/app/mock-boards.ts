import { Board } from './interfaces/board';
import { TODOS, TODOS1 } from './mock-todos';

export const BOARDS: Board[] = [
  { id: 1, name: 'My Todos', todos: [] },
  { id: 2, name: 'Homeparty', todos: [] },
  { id: 3, name: 'Website', todos: [] },
  { id: 4, name: 'My new home deco', todos: TODOS1 },
  { id: 5, name: 'New Kitchen', todos: TODOS },
];
