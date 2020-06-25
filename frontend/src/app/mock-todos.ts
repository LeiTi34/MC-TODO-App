import { Todo } from 'src/app/interfaces/todo';

export const TODOS: Todo[] = [
  {
    id: 1,
    position: 1,
    title: 'Einkaufen',
    isDone: false,
    createdDate: new Date(),
    updateDate: new Date(),
    subTodos: [
      { id: 1, position: 0, title: 'Milch', isDone: false },
      { id: 2, position: 1, title: 'Eier', isDone: false },
    ],
  },
  {
    id: 2,
    position: 2,
    title: 'Duschen gehen',
    isDone: false,
    createdDate: new Date(),
    updateDate: new Date(),
    dueDate: new Date(),
    subTodos: [],
  },
  {
    id: 3,
    position: 3,
    title: 'Haar Waschen',
    isDone: false,
    createdDate: new Date(),
    updateDate: new Date(),
    subTodos: [],
  },
];

export const TODOS1: Todo[] = [
  {
    id: 4,
    position: 1,
    title: 'Testen',
    isDone: false,
    createdDate: new Date(),
    updateDate: new Date(),
    subTodos: [
      { id: 3, position: 0, title: 'Coole app!', isDone: false },
      { id: 4, position: 1, title: 'Eier', isDone: false },
    ],
  },
  {
    id: 5,
    position: 2,
    title: 'Doppeltest',
    isDone: true,
    createdDate: new Date(),
    updateDate: new Date(),
    dueDate: new Date(),
    subTodos: [],
  },
  {
    id: 6,
    position: 3,
    title: 'Oage Todo',
    isDone: false,
    createdDate: new Date(),
    updateDate: new Date(),
    subTodos: [],
  },
];
