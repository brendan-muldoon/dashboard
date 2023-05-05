<template>
  <div style="padding: 0 10rem 0 10rem">
    <h2>Register New Application</h2>
    <div class="container shadow rounded" style="padding: 5rem; margin-top: 5rem;">
      <form>
        <div class="form-group">
          <label for="appName"><h4>Application Name</h4></label>
          <input
            type="text"
            class="form-control"
            id="appName"
            v-model="appName"
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-outline-warning mt-3"
          @click.prevent="registerApplication"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ApplicationRegistration",
  data() {
    return {
      appName: "",
    };
  },
  methods: {
    registerApplication() {
      if (this.appName.trim() === "") {
        alert("Application Name cannot be empty");
        return;
      }

      axios
        .post("http://localhost:8080/api/register-app", {
          applicationId: this.appName,
        })
        .then((response) => {
          console.log(response);
          alert("Application Registered Successfully!");
          this.appName = "";
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to register application: " + error.message);
        });
    },
  },
};
</script>

<style>
h2 {
  font-size: 2.5rem;
  padding-top: 50px;
  padding-bottom: 1rem;
  text-align: center;
}
</style>
