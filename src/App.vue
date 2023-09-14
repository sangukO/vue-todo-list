<template>
    <h1>TODO-LIST</h1>
    <div>
        <input v-model="isAllChecked" type="checkbox" />
        <input @keydown.enter="handleInsert" placeholder="할 일 적기" />
        <ul v-if="todos.list.length > 0">
            <li v-for="(todo, index) in todos.list" :key="index">
                <input type="checkbox" v-model="todo.checked" />
                <label
                    @mouseover="handleHover(index, 'over')"
                    :class="todo.checked === true ? 'line-thought' : ''"
                    >{{ todo.text }}
                </label>
                <button
                    @mouseout="handleHover(index, 'out')"
                    v-if="todoHover === index"
                    :key="index"
                    @click="handleDelete(index)"
                >
                    X
                </button>
            </li>
        </ul>
        <footer class="footer" v-if="todos.list">
            <span
                ><strong>{{
                    todos.list.filter((item) => item.checked !== true).length
                }}</strong>
                items left</span
            >
            <button @click="handleState('All')">All</button>
            <button @click="handleState('Active')">Active</button>
            <button @click="handleState('Completed')">Completed</button>
            <button @click="ck">Clear completed</button>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const todoHover = ref("");
const state = ref("All");

const todos = reactive({
    nav: "all",
    list: [
        {
            text: "123123",
            checked: false,
        },
        {
            text: "123123",
            checked: false,
        },
        {
            text: "123123",
            checked: false,
        },
        {
            text: "123123",
            checked: false,
        },
        {
            text: "123123",
            checked: false,
        },
    ],
});

const isAllChecked = computed({
    set: (state) => {
        for (let i = 0; i < todos.list.length; i++) {
            todos.list[i].checked = state;
        }
    },
    get: () =>
        todos.list.length ? todos.list.every((item) => item.checked) : false,
});

function handleInsert(event) {
    const { value } = event.target;
    if (value !== "") {
        todos.list.push({
            text: value,
            checked: false,
        });
        event.target.value = "";
    }
}

function handleHover(index, command) {
    if (command === "over") {
        todoHover.value = index;
    } else if (command === "out") {
        todoHover.value = null;
    }
}

function handleDelete(index) {
    todos.list = todos.list.filter((_, i) => i !== index);
}

function handleState(stateParam) {
    state.value = stateParam;
}

function ck() {
    console.log(todos.list);
}
</script>

<style>
ul {
    align-items: center;
}
.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
