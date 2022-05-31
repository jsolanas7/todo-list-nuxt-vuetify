
<template>
    <v-card>
        <v-card-title>
            {{isEdit ? 'Edit' : 'Add'}}
        </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid">
                <v-text-field dense outlined label="Title" v-model="title">
                </v-text-field>
                <v-text-field dense outlined label="Title" v-model="description">
                </v-text-field>
                <v-select dense outlined :items="items">

                </v-select>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {TodoItemModel} from "../todo-list/models/TodoItemModel"
@Component
export default class CreateCard extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) isEdit!: boolean;

    items = ['Backlog', 'In progress', 'Done'];
}
</script>

<style>

</style>


