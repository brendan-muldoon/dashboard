<template>
  <div class="container">
    <h3>
      Sorry there was an error executing your request due to: 
      <br />
      <br />
      <br />

      <strong>{{ message }}</strong>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 2.5rem;
  padding-top: 100px;
  padding-bottom: 10rem;
  text-align: center;
}
</style>
