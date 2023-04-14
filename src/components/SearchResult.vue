<template>
  <div>
    <div class="container" style="padding: 0 10rem 0 10rem;">
      <h3>Search results for application: '{{ id }}'</h3>
      <a v-for="(result, index) in results['logs']" :key="result">
        <div class="accordion" :id="'accordion-' + index">
          <div class="accordion-item">
            <h2 class="accordion-header" style="padding: 0;">
              <button
                class="accordion-button bg-dark text-color"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + index"
                aria-expanded="false"
                :aria-controls="'collapse-' + index"
              >
                Date - Time :: {{ result["dateTime"] }}
              </button>
            </h2>
            <div
              :id="'collapse-' + index"
              class="accordion-collapse collapse"
              :data-bs-parent="'#accordion-' + index"
            >
              <div class="accordion-body">
                {{ result["description"] }}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchResult",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getResults"]),
    results() {
      return this.getResults;
    },
  },
};
</script>

<style scoped>
.text-color {
  color: white !important;
}
h3 {
  font-size: 2.5rem;
  padding-top: 50px;
  padding-bottom: 10rem;
  text-align: center;
}
</style>
