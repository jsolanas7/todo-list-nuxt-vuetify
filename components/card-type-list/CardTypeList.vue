
<template>
  <v-card height="80vh" elevation="2">
      <v-card-title>
          {{title}}: {{items.length}}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
          <template v-for="item in items">
              <card :key="item" :item="item">
              </card>
          </template>
      </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
@Component
export default class OLoginBox extends Vue {
  @Prop({ type: Array, required: true }) items!: TodoItemModel[];
  @Prop({ type: String, required: true }) title!: string;

}
</script>

<style>

</style>


