import { defineStore } from "pinia";

export const useListStore = defineStore("listStore", {
    state: () => {
        return { currentID: 0, nav: "All", list: [] };
    },
    getters: {
        isAllChecked: (list) =>
            list.list.length ? list.list.every((item) => item.checked) : false,
        checkState: (list) => {
            if (list.nav === "All") {
                return list.list;
            } else if (list.nav === "Active") {
                return list.list.filter((item) => item.checked === false);
            } else if (list.nav === "Completed") {
                return list.list.filter((item) => item.checked === true);
            }
        },
    },
    actions: {
        // setter
        insertTodo(value) {
            if (value !== "") {
                this.list.push({
                    id: this.currentID++,
                    text: value,
                    checked: false,
                });
            }
        },

        deleteTodo(id) {
            this.list = this.list.filter((item) => item.id !== id);
        },

        modifyState(state) {
            this.nav = state;
        },

        checkTodo(id) {
            this.list = this.list.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            );
        },

        editTodo(id, text) {
            this.list = this.list.map((item) =>
                item.id === id ? { ...item, text: text } : item
            );
        },
    },
});
