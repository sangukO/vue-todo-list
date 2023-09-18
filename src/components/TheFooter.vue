<template>
    <footer class="footer" v-if="props.todos.list.length">
        <span
            ><strong>{{
                props.todos.list.filter((item) => !item.checked).length
            }}</strong>
            items left</span
        >
        <button @click="emitState('All')">All</button>
        <button @click="emitState('Active')">Active</button>
        <button @click="emitState('Completed')">Completed</button>
        <button
            :class="
                props.todos.list.filter((item) => item.checked).length
                    ? 'visibility'
                    : 'none-visibility'
            "
            @click="handleClear"
        >
            Clear completed
        </button>
    </footer>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["emitState"]);

const props = defineProps({
    todos: {
        nav: String,
        list: Array,
    },
});

function emitState(stateParam) {
    emits("emitState", stateParam);
}

function handleClear() {
    props.todos.list = props.todos.list.filter((item) => item.checked !== true);
}
</script>

<style></style>
