<template>
    <div class="top">
        <input
            type="checkbox"
            :class="todoStore.maxId ? 'visibility' : 'none-visibility'"
        />
        <input
            v-model="toInsertTodo"
            @keydown.enter="onEnter"
            placeholder="할 일 적기"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "@stores/index";
import { fetchPostTodo } from "@api/todolist";

const todoStore = useTodoStore();
const toInsertTodo = ref("");

const maxId = computed(() => todoStore.getMaxId);

async function onEnter() {
    await fetchPostTodo(toInsertTodo.value);
    todoStore.insertTodo(maxId.value, toInsertTodo.value);
    toInsertTodo.value = "";
}
</script>

<style></style>
