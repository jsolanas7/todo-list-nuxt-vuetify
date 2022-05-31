export interface TodoItemModel{
    id: string;
    date: Date;
    description?: string;
    title: string;
    status: number; //0 backlog, 1 in progress, 2 done
}
