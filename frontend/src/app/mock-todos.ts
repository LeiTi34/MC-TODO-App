import { Todo } from 'src/app/interfaces/todo';

export const TODOS: Todo[] = [
    { position: 1, title: 'Einkaufen', isDone: false, createdDate: new Date(), updateDate: new Date(), 
    subTodos: [{position: 0, title: 'Milch', isDone: false}, {position: 1, title: 'Eier', isDone: false} ]},
    { position: 2, title: 'Duschen gehen', isDone: false, createdDate: new Date(), updateDate: new Date(), dueDate: new Date(), subTodos: []},
    { position: 3, title: 'Haar Waschen', isDone: false, createdDate: new Date(), updateDate: new Date(), subTodos: []},
];

export const TODOS1: Todo[] = [
    { position: 1, title: 'Testen', isDone: false, createdDate: new Date(), updateDate: new Date(), 
    subTodos: [{position: 0, title: 'Coole app!', isDone: false}, {position: 1, title: 'Eier', isDone: false} ]},
    { position: 2, title: 'Doppeltest', isDone: true, createdDate: new Date(), updateDate: new Date(), dueDate: new Date(), subTodos: []},
    { position: 3, title: 'Oage Todo', isDone: false, createdDate: new Date(), updateDate: new Date(), subTodos: []},
];