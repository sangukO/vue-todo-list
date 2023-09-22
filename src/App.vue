<template>
    <h1>TODO-LIST</h1>
    <div>
        <TheHeader></TheHeader>

        <!-- <TheList v-if="list.length > 0" @deleteTodo="handleDelete"></TheList> -->
        <TheList></TheList>

        <!-- <TheFooter></TheFooter> -->
    </div>
</template>

<script setup>
import { TheHeader, TheList, TheItem, TheFooter } from "@components";
</script>

<style>
ul {
    font-size: 15px;
    line-height: 1;
}

li {
    display: flex;
    justify-content: space-between;
}

li:hover > button {
    visibility: visible;
}

li > button {
    visibility: hidden;
}

label {
    line-height: 40px;
}

.visibility {
    visibility: visible;
}

.none-visibility {
    visibility: hidden;
}
</style>
