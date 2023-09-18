import { defineStore } from "pinia";

export const useListStore = defineStore("listStore", {
    state: () => {
        return { nav: "All", list: [] };
    },
    getters: {
        isAllChecked: (list) => {
            list.list.length ? list.list.every((item) => item.checked) : false;
        },

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
                    text: value,
                    checked: false,
                });
            }
        },

        deleteTodo(index) {
            this.list = this.list.filter((_, i) => i !== index);
        },

        modifyState(state) {
            this.nav = state;
        },
    },
});
