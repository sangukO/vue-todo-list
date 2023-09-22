import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
    state: () => {
        return { todos: [] };
    },
    getters: {
        getMaxId: (todo) => todo.todos[todo.todos.length - 1].id,
        // isAllChecked: (list) =>
        //     list.list.length ? list.list.every((item) => item.checked) : false,
        // checkState: (list) => {
        //     if (list.nav === "All") {
        //         return list.list;
        //     } else if (list.nav === "Active") {
        //         return list.list.filter((item) => item.checked === false);
        //     } else if (list.nav === "Completed") {
        //         return list.list.filter((item) => item.checked === true);
        //     }
        // },
    },
    actions: {
        // setter
        insertTodo(maxId, text) {
            if (text !== "") {
                this.todos.push({
                    id: maxId + 1,
                    text: text,
                    checked: false,
                });
            }
        },

        deleteTodo(id) {
            this.todos = this.todos.filter((item) => item.id !== id);
        },

        modifyState(state) {
            this.nav = state;
        },

        checkTodo(id) {
            this.todos.id.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            );
        },

        editTodo(id, text) {
            this.todos.id.map((item) =>
                item.id === id ? { ...item, text: text } : item
            );
        },
    },
});
