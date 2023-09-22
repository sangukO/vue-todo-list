<template>
    <li>
        <input type="checkbox" :checked="checked" @click="handleCheck" />
        <label
            contenteditable="true"
            :class="checked ? 'line-thought' : ''"
            @input="handleEdit"
            >{{ props.todoElement.text }}
        </label>
        <button @click="ondelete">X</button>
    </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { fetchReverseTodo, fetchDeleteTodo } from "@api/todolist";

import { useTodoStore } from "../stores/index";

const todoStore = useTodoStore();

const props = defineProps({
    todoElement: {
        id: Number,
        checked: Boolean,
        text: String,
    },
});

const emit = defineEmits(["deleteEmit"]);

const checked = ref(props.todoElement.checked);

function ondelete() {
    fetchDeleteTodo(props.todoElement.id);
    todoStore.deleteTodo(props.todoElement.id);
}

function handleCheck() {
    fetchReverseTodo(props.todoElement.id, checked.value);
    checked.value = !checked.value;
}

// function handleEdit(event) {
//     list.editTodo(props.todoElement.id, event.target.innerText);
// }
</script>

<style>
.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
