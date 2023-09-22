import { todosAPI } from "./instances";

export const fetchGetTodos = () => todosAPI.get("");
export const fetchPostTodo = (text) =>
    todosAPI.post("", { checked: false, text: text });
export const fetchEditTodo = (id) => todosAPI.put(`/${id}`);
export const fetchDeleteTodo = (id) => todosAPI.delete(`/${id}`);
export const fetchReverseTodo = (id, status) =>
    todosAPI.patch(`/${id}`, { checked: !status });
