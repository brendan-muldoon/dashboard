<template>
  <nav class="navbar navbar-dark bg-dark" style="padding: 10px">
    <div class="d-inline-flex p-2 justify-content-start">
      <router-link to="/about" class="navbar-brand" href="/">
        <img
          src="../assets/imgs/BTGroup_Final.png"
          alt="Logo"
          style="max-width: 100px; max-height: 50px"
        />
      </router-link>
      <router-link
        to="/about"
        class="navbar-brand documentation-text-color"
        href="/"
        style="margin-left: 20px"
        >About</router-link
      >
      <router-link
        to="/documentation"
        class="navbar-brand documentation-text-color"
        href="/documentation"
        style="margin-left: 20px"
        >Documentation</router-link
      >
      <router-link
        to="/register"
        class="navbar-brand documentation-text-color"
        href="/register"
        style="margin-left: 20px"
        >Register</router-link
      >
    </div>
    <form
      class="form-inline d-flex align-items-center"
      @submit.prevent="search"
    >
      <input
        required
        pattern="\S(.*\S)?"
        title="This field is required"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style="margin-right: 10px"
        v-model="appId"
      />
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
</template>
<style>
.documentation-text-color {
  color: white !important;
}
.documentation-text-color:hover {
  color: rgb(190, 159, 190) !important;
}
</style>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "AppNavbar",
  data() {
    return {
      appId: "",
      results: [],
    };
  },
  methods: {
    ...mapActions(["setResults"]),
    async search() {
      if (this.appId.trim() === "") {
        // show error message or do something else
        return;
      }
      await axios
        .get("http://localhost:8080/api/retrieve-logs/" + this.appId)
        .then((response) => {
          this.setResults(response.data);
          this.$router.push({
            name: "search-result",
            query: {
              q: this.appId,
            },
          });
          this.appId = "";
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({
            name: "error",
            query: { message: error.response.data },
          });
        });
    },
  },
};
</script>
