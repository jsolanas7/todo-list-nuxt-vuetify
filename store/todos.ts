import { TodoItemModel } from "~/components/todo-list/models/TodoItemModel";

export const state = () => ({
    list: []
});

export const mutations = {

    add (state: any, object: TodoItemModel){
        debugger;
        state.list.push(
            object
        )
    },

    remove (state: any, id: string){
        debugger;
        const item = state.list.find((a: TodoItemModel) => a.id === id );
        if(item){
        state.list.splice(state.list.indexOf(item),1);
        }
    },
        
}