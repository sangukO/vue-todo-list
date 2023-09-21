<template>
    <ul>
        <!-- TheItem.vue -->
        <TheItem v-for="item in checkState" :item="item" :key="item.id">
        </TheItem>
        <!-- TheItem.vue -->
    </ul>
</template>

<script setup>
import { TheItem } from "./index.js";
import { computed } from "vue";

import { useListStore } from "../stores/index";
const list = useListStore();

const checkState = computed(() => list.checkState);
</script>

<style></style>
