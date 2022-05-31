
<template>
    <v-row>
        <v-col cols="4">
              <card-type-list :title="'Backlog'" :items="items">
      
  </card-type-list>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
@Component
export default class OLoginBox extends Vue {
  @Prop({ type: Object, required: true }) item!: TodoItemModel;

    items = [
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
        { title: "Titulo primero", description: "Description pd12e aprobanod lo qu 12312 312 312", id: 1, date: new Date()},
    ]
}
</script>

<style>

</style>


