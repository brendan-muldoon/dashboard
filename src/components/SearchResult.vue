<template>
  <div>
    <h2>Search Result</h2>
    <ul>
      <li>Title: {{ data.title }}</li>
      <li>Description: {{ data.description }}</li>
      <li>URL: {{ data.url }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props : {
    data : {
      type: Object,
      required: true,
    }
  }
};
</script>
