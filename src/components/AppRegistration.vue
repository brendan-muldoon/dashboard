<template>
    <h2>Register New Application</h2>
    <div class="container shadow rounded" style="padding: 1rem;">
      <form>
          <label for="appName"><h4>Application Name</h4></label>
          <input
            type="text"
            class="form-control"
            id="appName"
            v-model="appName"
            required
          />
        <button
          type="submit"
          class="btn btn-dark btn-outline-light btn-lg mt-3"
          @click.prevent="registerApplication"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 2 17 17"
          >
            <path
              d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          Submit
        </button>
      </form>
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
