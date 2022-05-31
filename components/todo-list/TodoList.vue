
<template>
    <v-row>
        <v-col cols="11">
            <h1>Todo list</h1>
        </v-col>
        <v-col cols="1" class="text-right">
            <v-btn color="primary" fab @click="dialogActivated = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="4">
              <card-type-list v-on:onEdit="onEdit" :title="'Backlog'" :items="getItems(1)">
  </card-type-list>
        </v-col>
         <v-col cols="4">
              <card-type-list v-on:onEdit="onEdit" :title="'In progress'" :items="getItems(2)">
  </card-type-list>
        </v-col>
         <v-col cols="4">
              <card-type-list v-on:onEdit="onEdit" :title="'Done'" :items="getItems(3)">
  </card-type-list>
        </v-col>
        <v-dialog v-if="dialogActivated" persistent max-width="500px" v-model="dialogActivated">
            <create-card :isEdit="isEdit" :id="id" v-on:onCancel="onCancel" v-on:onSave="onSave"></create-card>
        </v-dialog>
    </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
import {TodoListService} from "./services/TodoListService";
@Component
export default class OLoginBox extends Vue {
    dialogActivated = false;
    items: TodoItemModel[] = [];
    isEdit = false;
    id = "";
    created(){
        const todoListService = new TodoListService(this.$store);
        this.items = todoListService.getAll();
    }
    onCancel(){
        this.dialogActivated = false;
    }
    onSave(){
        this.dialogActivated = false;
    }

    onEdit(id:string){
        this.isEdit = true;
        this.id = id;
        this.dialogActivated = true;
    }

    getItems(status: number): TodoItemModel[]{
        const result = this.items.filter(a => a.status == status);
        return result.sort(
      (a: any, b: any) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
    }
}
</script>

<style>

</style>


