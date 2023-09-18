<template>
    <li>
        <input type="checkbox" v-model="item.checked" />
        <label :class="item.checked ? 'line-thought' : ''"
            >{{ item.text }}
        </label>
        <button @click="ondelete">X</button>
    </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    item: Object,
    index: Number,
});

const emits = defineEmits(["deleteTodo"]);

function ondelete() {
    emits("deleteTodo", props.index);
}
</script>

<style>
.line-thought {
    text-decoration: line-through;
    color: lightgray;
}
</style>
