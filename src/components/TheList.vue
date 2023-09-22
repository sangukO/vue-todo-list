<template>
    <ul>
        <!-- TheItem.vue -->
        <TheItem
            v-for="todoElement in todoStore.todos"
            :todoElement="todoElement"
            :key="todoElement.id"
            @deleteEmit="deleteTodo"
        >
        </TheItem>
        <!-- TheItem.vue -->
    </ul>
</template>

<script setup>
import { onMounted } from "vue";
import { TheItem } from "./index.js";
import { reactive, computed } from "vue";
import { fetchGetTodos } from "@api/todolist";

import { useTodoStore } from "../stores/index";

const todoStore = useTodoStore();

// const checkState = computed(() => list.checkState);

async function callGetTodos() {
    const { data } = await fetchGetTodos();

    for (let i in data) {
        todoStore.todos[i] = data[i];
    }
}

function deleteTodo(param) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === param.id) {
            todos.splice(i, 1);
        }
    }
}

onMounted(() => {
    callGetTodos();
});
</script>

<style></style>
