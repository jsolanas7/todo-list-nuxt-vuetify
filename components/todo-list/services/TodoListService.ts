import { TodoItemModel } from "../models/TodoItemModel";

export class TodoListService{
    $store: any;
    constructor(store: any){
        this.$store = store;
    }
    removeItem(id: string){
        this.$store.commit('todos/remove', id);
    }

    getAll(): TodoItemModel[]{
        return this.$store.state.todos.list;
    }

    getById(id: string): TodoItemModel | undefined{
        const items = this.getAll();
        return items.find(a => a.id === id);
    }

 
}