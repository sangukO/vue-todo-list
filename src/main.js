import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

import VueRouter from "vue-router";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(VueRouter).mount("#app");
