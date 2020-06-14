import { Board } from './interfaces/board';
import { TODOS, TODOS1 } from './mock-todos';

export const BOARDS: Board[] = [
    {name: 'My Todos', todos: []},
    {name: 'Homeparty', todos: []},
    {name: 'Website', todos: []},
    {name: 'My new home deco', todos: TODOS1},
    {name: 'New Kitchen', todos: TODOS},
]