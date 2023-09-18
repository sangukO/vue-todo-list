<template>
    <footer class="footer" v-if="list.list.length">
        <span
            ><strong>{{
                list.list.filter((item) => !item.checked).length
            }}</strong>
            items left</span
        >
        <button @click="list.modifyState('All')">All</button>
        <button @click="list.modifyState('Active')">Active</button>
        <button @click="list.modifyState('Completed')">Completed</button>
        <button
            :class="
                list.list.filter((item) => item.checked).length
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

import { useListStore } from "../stores/index";
const list = useListStore();

const props = defineProps({
    todos: {
        nav: String,
        list: Array,
    },
});

function handleClear() {
    list.list = list.list.filter((item) => item.checked !== true);
}
</script>

<style></style>
