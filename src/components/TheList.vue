<template>
    <ul>
        <!-- TheItem.vue -->
        <TheItem
            v-for="(item, index) in checkState"
            :item="item"
            :index="index"
            :key="index"
            @deleteTodo="handleEvent"
        ></TheItem>
        <!-- TheItem.vue -->
    </ul>
</template>

<script setup>
import { TheItem } from "./index.js";
import { defineEmits, defineProps, computed } from "vue";

const props = defineProps({
    todos: {
        nav: String,
        list: Array,
    },
});

const emits = defineEmits(["deleteTodo"]);

function handleEvent(index) {
    emits("deleteTodo", index);
}

const checkState = computed(() => {
    if (props.todos.nav === "All") {
        return props.todos.list;
    } else if (props.todos.nav === "Active") {
        return props.todos.list.filter((item) => item.checked === false);
    } else if (props.todos.nav === "Completed") {
        return props.todos.list.filter((item) => item.checked === true);
    }
});
</script>

<style></style>
