<template>
    <div class="top">
        <input
            v-model="isAllChecked"
            type="checkbox"
            :class="list.list.length ? 'visibility' : 'none-visibility'"
        />
        <input
            v-model="toInsertTodo"
            @keydown.enter="onEnter"
            placeholder="할 일 적기"
        />
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, computed } from "vue";
import { useListStore } from "../stores/index";

const list = useListStore();
const toInsertTodo = ref("");

function onEnter() {
    list.insertTodo(toInsertTodo.value);
    toInsertTodo.value = "";
}

const isAllChecked = computed({
    set: (state) => {
        for (let i = 0; i < list.list.length; i++) {
            list.list[i].checked = state;
        }
    },
    get: () => list.isAllChecked,
});
</script>

<style></style>
