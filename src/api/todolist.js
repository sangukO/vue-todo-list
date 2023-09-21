import { todosAPI } from "./instances";

export const fetchTodoList = () => todosAPI.get("");
export const fetchEditTodo = (id) => userAPI.post(`/${id}`);
