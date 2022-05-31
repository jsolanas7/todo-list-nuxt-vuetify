
<template>
  <v-card height="85vh" elevation="2">
      <v-card-title>
          {{title}}: {{items.length}}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="cardsContainer" v-if="items && items.length > 0">
          <template v-for="item in items">
              <card v-on:onDelete="onDelete" v-on:onEdit="onEdit" class="mt-2" :key="item.id" :item="item">
              </card>
          </template>
      </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
import { TodoListService } from "../todo-list/services/TodoListService";
@Component
export default class OLoginBox extends Vue {
  @Prop({ type: Array, required: true }) items!: TodoItemModel[];
  @Prop({ type: String, required: true }) title!: string;

  onDelete(id: string){
      const todoListService = new TodoListService(this.$store);
      todoListService.removeItem(id);
  }

  onEdit(id: string){
      this.$emit("onEdit", id);
  }
}
</script>

<style>
.cardsContainer{
    max-height: 75vh;
    overflow-y: auto;
}
</style>


