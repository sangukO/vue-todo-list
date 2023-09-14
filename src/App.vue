<template>
    <h1>TODO-LIST</h1>
    <div>
        <input type="checkbox" />
        <input @keydown.enter="handleEnter" placeholder="할 일 적기" />
        <div v-if="todos.list.length > 0">
            <ul>
                <li v-for="(todo, index) in todos.list" :key="index">
                    <input type="checkbox" />
                    <label
                        >{{ todo.text }}
                        <button @click="handleDelete(index)">X</button>
                    </label>
                </li>
            </ul>
            <footer class="footer">
                <span
                    ><strong>{{ todos.list.length }}</strong> items left</span
                >
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const todos = reactive({
    nav: "all",
    list: [],
});

function handleEnter(event) {
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
</script>

<style>
ul {
    list-style-type: none;
}
</style>
