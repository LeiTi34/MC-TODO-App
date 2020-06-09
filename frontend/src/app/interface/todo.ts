export interface ToDo {
    position: number;
    title: string;
    isDone: boolean;
    note?: string;
    subTodo?: string;
    reminderDate?: Date;
    dueDate?: Date;
    repeatInterval?: string;
    createdDate: Date;
    updateDate: Date;
}
