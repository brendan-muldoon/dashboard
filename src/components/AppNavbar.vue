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
      <router-link to="/about"
      class="navbar-brand documentation-text-color"
      href="/"
      style="margin-left: 20px"
      >About</router-link
    >
      <router-link to="/documentation"
        class="navbar-brand documentation-text-color"
        href="/documentation"
        style="margin-left: 20px"
        >Documentation</router-link
      >

    </div>
    <form class="form-inline d-flex align-items-center">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style="margin-right: 10px"
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
export default {
  name: "AppNavbar"
};
</script>
