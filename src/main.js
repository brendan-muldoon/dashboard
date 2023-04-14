import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/assets/css/tailwind.css";

import { createRouter, createWebHistory } from "vue-router";
import AppDocumentation from "./components/AppDocumentation.vue";
import AppAbout from "./components/AppAbout.vue";
import SearchResult from "./components/SearchResult.vue";
import ErrorPage from "./components/ErrorPage.vue"
import AppRegistration from "./components/AppRegistration.vue";

import store from './store/store';


const routes = [
  { path: "/", component: AppAbout },
  { path: "/documentation", component: AppDocumentation },
  { path: "/about", component: AppAbout },
  { path: "/register", component: AppRegistration },

  {
    path: "/search-result",
    name: "search-result",
    component: SearchResult,
    props: (route) => ({ id: route.query.q }),
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorPage,
    props: (route) => ({ message: route.query.message })
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router).mount("#app");
app.use(store);
