<template>
  <div class="container">
    <h2>About</h2>
    <p>
      The log tool is a lightweight dashboard with the aim to simplify and
      streamline the process of tracking API logs. It
      provides a uniformed way of monitoring APIs and reduces the time and
      effort required to investigate issues. With its user-friendly interface
      and comprehensive features, the application is a valuable tool for
      developers and IT professionals who want to optimise their API management
      and troubleshooting processes. By leveraging the power of this
      application, developers can minimise errors, improve efficiency, and
      ultimately, deliver better products and services.
      <br />
      <br />
      With this tool, you don't have to go all in, you can use it to track what
      you need.
      <br />
      <br />

      <router-link
        class="btn btn-dark btn-outline-light btn-lg"
        href="/documentation"
        to="/documentation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          fill="currentColor"
          class="bi bi-book"
          viewBox="1 1 16 16"
        >
          <path
            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
          />
        </svg>
        Documentation</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "AppAbout",
};
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
  padding-top: 50px;
  padding-bottom: 1rem;
  text-align: center;
}

p {
  font-size: 1.25rem;
  padding-top: 4rem;
  padding-bottom: 5rem;
  padding-right: 10rem;
  padding-left: 10rem;
  text-align: left;
  margin-bottom: -5px;
}
</style>
