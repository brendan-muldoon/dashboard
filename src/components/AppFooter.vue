<template>
  <footer class="mt-auto py-3 bg-light footer">
    <div class="container d-inline-flex p-2 justify-content-end">
      <span class="text-muted" 
        >© British Telecommunications plc 2023
        <img
          src="../assets/imgs/BT_Group_2022.svg.png"
          alt="Logo"
          style="margin-left:1rem; max-width: 100px; max-height: 50px"
      /></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
  padding: 10px;
  height: 75px;
}
</style>
