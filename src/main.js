import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/css/tailwind.css";

import { createRouter, createWebHistory  } from "vue-router";
import AppDocumentation from "./components/AppDocumentation.vue";
import AppAbout from "./components/AppAbout.vue";

const routes = [
  { path: "/documentation", component: AppDocumentation },
  { path: "/about", component: AppAbout },
];

const router = createRouter({
    history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount('#app');
