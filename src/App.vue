<template>
    <h1>TODO-LIST</h1>
    <div>
        <input v-model="isAllChecked" type="checkbox" />
        <input @keydown.enter="handleInsert" placeholder="할 일 적기" />
        <div v-if="todos.list.length > 0">
            <ul>
                <li
                    v-for="(todo, index) in todos.list"
                    :key="index"
                    style="display: flex; justify-content: space-between"
                >
                    <input type="checkbox" v-model="todo.checked" />
                    <label
                        style="width: 100%; margin: auto"
                        @mouseover="handleHover(index, 'over')"
                        @mouseout="handleHover(index, 'out')"
                        >{{ todo.text }}
                        <button
                            style="float: right"
                            v-if="todoHover === index"
                            :key="index"
                            @click="handleDelete(index)"
                        >
                            X
                        </button>
                    </label>
                </li>
            </ul>
            <footer class="footer">
                <span
                    ><strong>{{ todos.list.length }}</strong> items left</span
                >
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button v-if="todos.list" @click="ck">Clear completed</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const todoHover = ref("");

const todos = reactive({
    nav: "all",
    list: [],
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

function ck() {
    console.log(todos.list);
}
</script>

<style>
ul {
    list-style-type: none;
}
</style>
