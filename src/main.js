import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/css/tailwind.css";

import { createRouter, createWebHistory } from "vue-router";
import AppDocumentation from "./components/AppDocumentation.vue";
import AppAbout from "./components/AppAbout.vue";
import SearchResult from "./components/SearchResult.vue";

import store from './store/store';


const routes = [
  { path: "/documentation", component: AppDocumentation },
  { path: "/about", component: AppAbout },
  {
    path: "/search-result",
    name: "search-result",
    component: SearchResult,
    props: (route) => ({ id: route.query.q }),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router).mount("#app");
app.use(store);
