<template>
    <div class="top">
        <input
            v-model="isAllChecked"
            type="checkbox"
            :class="list.length ? 'visibility' : 'none-visibility'"
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

const props = defineProps({
    list: Array,
});

const emits = defineEmits(["insertTodo"]);

const toInsertTodo = ref("");

function onEnter() {
    console.log(props.list.length);
    emits("insertTodo", toInsertTodo.value);
    toInsertTodo.value = "";
}

const isAllChecked = computed({
    set: (state) => {
        console.log(state);
        for (let i = 0; i < props.list.length; i++) {
            props.list[i].checked = state;
        }
    },
    get: () =>
        props.list.length ? props.list.every((item) => item.checked) : false,
});
</script>

<style></style>
