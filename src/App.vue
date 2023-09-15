<template>
    <h1>TODO-LIST</h1>
    <div>
        <div class="top">
            <input
                :class="todos.list.length ? 'visibility' : 'none-visibility'"
                v-model="isAllChecked"
                type="checkbox"
            />
            <input @keydown.enter="handleInsert" placeholder="할 일 적기" />
        </div>
        <ul v-if="todos.list.length > 0">
            <li v-for="(todo, index) in checkState" :key="index">
                <input type="checkbox" v-model="todo.checked" />
                <label :class="todo.checked ? 'line-thought' : ''"
                    >{{ todo.text }}
                </label>
                <button @click="handleDelete(index)">X</button>
            </li>
        </ul>
        <footer class="footer" v-if="todos.list.length">
            <span
                ><strong>{{
                    todos.list.filter((item) => !item.checked).length
                }}</strong>
                items left</span
            >
            <button @click="handleState('All')">All</button>
            <button @click="handleState('Active')">Active</button>
            <button @click="handleState('Completed')">Completed</button>
            <button
                :class="
                    todos.list.filter((item) => item.checked).length
                        ? 'visibility'
                        : 'none-visibility'
                "
                @click="handleClear"
            >
                Clear completed
            </button>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const todos = reactive({
    nav: "All",
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

const checkState = computed(() => {
    if (todos.nav === "All") {
        return todos.list;
    } else if (todos.nav === "Active") {
        return todos.list.filter((item) => item.checked === false);
    } else if (todos.nav === "Completed") {
        return todos.list.filter((item) => item.checked === true);
    }
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

function handleDelete(index) {
    todos.list = todos.list.filter((_, i) => i !== index);
}

function handleState(stateParam) {
    todos.nav = stateParam;
}

function handleClear() {
    todos.list = todos.list.filter((item) => item.checked !== true);
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

.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
