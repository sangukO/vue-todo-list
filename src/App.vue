<template>
    <h1>TODO-LIST</h1>
    <div>
        <TheHeader @insertTodo="handleInsert" :list="todos.list"></TheHeader>

        <TheList
            :todos="todos"
            v-if="todos.list.length > 0"
            @deleteTodo="handleDelete"
        ></TheList>

        <TheFooter :todos="todos" @emitState="handleState"></TheFooter>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { TheHeader, TheList, TheItem, TheFooter } from "./components";

const todos = reactive({
    nav: "All",
    list: [],
});

function handleInsert(value) {
    if (value !== "") {
        todos.list.push({
            text: value,
            checked: false,
        });
    }
}

function handleDelete(index) {
    todos.list = todos.list.filter((_, i) => i !== index);
}

function handleState(stateParam) {
    todos.nav = stateParam;
}
</script>

<style>
ul {
    font-size: 15px;
    line-height: 1;
}

li {
    display: flex;
    justify-content: space-between;
}

li:hover > button {
    visibility: visible;
}

li > button {
    visibility: hidden;
}

label {
    line-height: 40px;
}

.visibility {
    visibility: visible;
}

.none-visibility {
    visibility: hidden;
}
</style>
