<template>
    <li>
        <input
            type="checkbox"
            :checked="props.item.checked"
            @click="handleCheck"
        />
        <label
            contenteditable="true"
            :class="props.item.checked ? 'line-thought' : ''"
            @input="handleEdit"
            >{{ props.item.text }}
        </label>
        <button @click="ondelete">X</button>
    </li>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { useListStore } from "@stores/index";
import { fetchTodoList } from "@api/todolist";

const list = useListStore();

const props = defineProps({
    item: Object,
});

function ondelete() {
    list.deleteTodo(props.item.id);
}

function handleCheck() {
    list.checkTodo(props.item.id);
}

function handleEdit(event) {
    list.editTodo(props.item.id, event.target.innerText);
}
</script>

<style>
.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
