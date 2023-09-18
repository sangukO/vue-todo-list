<template>
    <li>
        <input type="checkbox" v-model="props.item.checked" />
        <label :class="props.item.checked ? 'line-thought' : ''"
            >{{ props.item.text }}
        </label>
        <button @click="ondelete">X</button>
    </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useListStore } from "../stores/index";

const list = useListStore();

const props = defineProps({
    item: Object,
    index: Number,
});

function ondelete() {
    list.deleteTodo(props.index);
}
</script>

<style>
.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
