<template>
    <ul>
        <!-- TheItem.vue -->
        <TheItem
            v-for="(item, index) in checkState"
            :item="item"
            :index="index"
            :key="index"
        ></TheItem>
        <!-- TheItem.vue -->
    </ul>
</template>

<script setup>
import { TheItem } from "./index.js";
import { defineEmits, defineProps, computed } from "vue";

import { useListStore } from "../stores/index";
const list = useListStore();

const props = defineProps({
    todos: {
        nav: String,
        list: Array,
    },
});

const checkState = computed(() => list.checkState);
</script>

<style></style>
