
<template>
  <v-card>
    <v-card-title>
      {{ isEdit ? "Edit" : "Add" }}
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          :rules="notEmptyRules"
          required
          dense
          outlined
          label="Title"
          v-model="title"
        >
        </v-text-field>
        <v-text-field dense outlined label="Description" v-model="description">
        </v-text-field>
        <v-select v-model="status" :rules="notEmptyRules" required dense outlined :items="items"
          item-text="text"
          item-value="value"
        >
        </v-select>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="onSave" color="primary">Save</v-btn>
      <v-btn @click="onCancel">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import { TodoItemModel } from "../todo-list/models/TodoItemModel";
import { GuidHelper } from "../helpers/GuidHelper";
import { CreateCardService } from "./services/CreateCardService";
import { TodoListService } from "../todo-list/services/TodoListService";
@Component
export default class CreateCard extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) isEdit!: boolean;
  @Prop({ type: String, required: false, default: false }) id!: string;
  @Ref() readonly form!: any;
  valid = false;
  items = [{text: "Backlog", value:1},{text: "In progress", value: 2}, {text: "Done", value:3}];
  notEmptyRules = [(v: string) => !!v || "Is required"];
  title: string = "";
  description: string | undefined = "";
  status: number  = 0;
  todoItem: TodoItemModel | undefined = {} as TodoItemModel;

  created(){
      if(this.isEdit){
          const todoListService = new TodoListService(this.$store);
          this.todoItem = todoListService.getById(this.id);
          this.description = this.todoItem!.description;
          this.title = this.todoItem!.title;
          this.description = this.todoItem?.description;
          this.status = this.todoItem!.status;
      }
  }
  onCancel() {
    this.$emit("onCancel");
  }

  onSave() {
    (this.$refs.form as Vue & { validate: () => boolean }).validate();
    if (this.valid) {
           const createCardService = new CreateCardService(this.$store);
       if(this.isEdit){
           const item: TodoItemModel = {
               id: this.todoItem!.id,
               date: this.todoItem!.date,
               description: this.description,
               title: this.title,
               status: this.status
           };
           createCardService.update(item);
       }else{
           const guidHelper = new GuidHelper();
           const item: TodoItemModel = {
               id: guidHelper.createGuid(),
               date: new Date(),
               description: this.description,
               title: this.title,
               status: this.status
           };
           createCardService.addItem(item);
       }
           this.$emit("onSave");
    }
  }


  }
</script>

<style>
</style>


