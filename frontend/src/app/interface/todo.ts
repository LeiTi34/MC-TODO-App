export interface ToDo {
    position: number;
    title: string;
    isDone: boolean;
    note?: string;
    reminderDate?: Date;
    dueDate?: Date;
    createdDate: Date;
    updateDate: Date;
}
