import { TodoItemModel } from "~/components/todo-list/models/TodoItemModel";

export class CreateCardService{
    $store: any;
    constructor(store: any){
        this.$store = store;
    }
        addItem(item: TodoItemModel){
        this.$store.commit('todos/add', item);
    }

    update(item: TodoItemModel){
        this.$store.commit('todos/remove', item.id);
        debugger;
        this.addItem(item);
    }
}