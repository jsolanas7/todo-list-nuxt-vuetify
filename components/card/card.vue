
<template>
  <v-card class="card-todo" :style="'border-color:'+itemColor.background+'!important'" elevation="2">
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-text>{{ item.description }}</v-card-text>
      <v-card-actions class="pt-0 pb-0">
            <span>
                {{formatDate(item.date)}}
            </span>
            <v-spacer></v-spacer>
        <v-btn icon @click="onEdit">
                <v-icon>mdi-pencil</v-icon>
        </v-btn>
         <v-btn icon @click="onDelete">
                <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
import {DateHelper} from "../helpers/DateHelper";
@Component
export default class OLoginBox extends Vue {
  @Prop({ type: Object, required: true }) item!: TodoItemModel;

    created(){
        this.getRandomColor();
    }

    formatDate(date: Date){
        const dateHelper = new DateHelper();
        return dateHelper.getDateWithFormat(date.toString());

    }
     colors: object[] = [
    {background: '#b8d8d8', font: '#506568'},
    {background: '#d5e5a3', font: '#60773d'},
    {background: '#ffe28c', font: '#b25825'},
    {background: '#d6c1ab', font: '#75442e'},
    {background: '#baa9ba', font: '#3a283d'},
    {background: '#ff8f5e', font: '#772510'}
  ];

    itemColor: any;

    getRandomColor() {
    const max = this.colors.length;
    const min = 0;
    const random = Math.floor(Math.random() * (max - min)) + min;
    this.itemColor =  this.colors[random];
    debugger;
}

    onDelete(){
        this.$emit("onDelete", this.item.id);
    }

      onEdit(){
        this.$emit("onEdit", this.item.id);
    }
}
</script>

<style>
.card-todo{
    border: 1px solid!important;
    border-left: 4px solid!important;
    border-radius: 8px!important;
}
.card-todo .v-icon{
    font-size:1.2rem!important;
}
</style>


