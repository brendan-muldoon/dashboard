<template>
  <div class="app">
    <AppNavbar />
    <div :class="theme" style="min-height: 100%">
      <div class="container" style="position: sticky; top: 0; margin-right:0rem;">
        <label class="switch m-3" style="float: right">
          <input type="checkbox" checked @click="toggleTheme" />
          <span class="slider round"></span>
        </label>
      </div>
      <router-view />
    </div>
  
    <AppFooter />
  </div>

</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    theme() {
      return this.isDarkMode ? "dark" : "light";
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style>
.app {

  position:absolute;
  padding:0;
  margin:0;

  top:0;
  left:0;

  width: 100%;
  height: 100%;
  min-height: 100%;
  
}
.light {
  background-color: #fff;
  color: #292b2c;
}

.dark {
  background-color: #292b2c;
  color: #fff;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #292b2c;
}

input:focus + .slider {
  box-shadow: 0 0 1px #292b2c;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
