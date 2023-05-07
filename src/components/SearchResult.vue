<template>
  <div>
    <div class="container">
      <h3>Search results for application: '{{ id }}'</h3>
    </div>
    <div class="container" style="padding: 0 5rem 0 5rem">
      <div class="row mb-4">
        <div class="col-3">
          <label for="fromDate" class="form-label">From:</label>
          <input
            type="date"
            id="fromDate"
            class="form-control"
            v-model="fromDate"
          />
        </div>
        <div class="col-3">
          <label for="toDate" class="form-label">To:</label>
          <input
            type="date"
            id="toDate"
            class="form-control"
            v-model="toDate"
          />
        </div>
        <div class="col-3 mt-4 pt-2">
          <button class="btn btn-outline-danger" @click="resetFilters">
            Reset Filter
          </button>
        </div>
        <div class="col-3 mt-4 pt-2 text-end">
          <button class="btn btn-outline-warning" @click="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 17 17"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              />
            </svg>
            Refresh
          </button>
        </div>
      </div>
      <a v-for="(result, index) in filteredLogs" :key="result">
        <div class="accordion" :id="'accordion-' + index">
          <div class="accordion-item">
            <h2 class="accordion-header" style="padding: 0">
              <button
                class="accordion-button bg-dark text-color"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + index"
                aria-expanded="false"
                :aria-controls="'collapse-' + index"
              >
                Date - Time ::
                {{ new Date(result["timestamp"]).toLocaleDateString("en-GB") }}
                -
                {{ new Date(result["timestamp"]).toLocaleTimeString("en-GB") }}
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
      <nav aria-label="Page navigation example">
        <ul class="mt-3 pagination justify-content-end">
          <li :class="{ disabled: currentPage === 1 }">
            <button
              class="btn btn-outline-primary"
              @click="changePage(currentPage - 1)"
            >
              Previous
            </button>
          </li>
          <li
            v-for="page in Math.ceil(filteredLogs.length / 10)"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="btn btn-outline-success" @click="changePage(page)">
              {{ currentPage }}
            </button>
          </li>
          <li
            :class="{
              disabled: currentPage === Math.ceil(filteredLogs.length / 10),
            }"
          >
            <button
              class="btn btn-outline-primary"
              @click="changePage(currentPage + 1)"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <br/>
    <br/>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "SearchResult",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fromDate: null,
      toDate: null,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["getResults"]),
    filteredLogs() {
      const today = new Date();
      let results =
        this.fromDate && this.toDate
          ? this.getResults.filter((result) => {
              const resultDate = new Date(result.timestamp);
              return (
                resultDate >= new Date(this.fromDate) &&
                resultDate <=
                  (this.toDate === this.formatDate(today)
                    ? today
                    : new Date(this.toDate))
              );
            })
          : this.getResults.slice();

      results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // Add pagination
      const startIndex = (this.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      return results.slice(startIndex, endIndex);
    },
  },

  methods: {
    resetFilters() {
      this.fromDate = null;
      this.toDate = null;
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    async refresh() {
      // new method
      await axios
        .get("http://localhost:8080/api/retrieve-logs/" + this.id)
        .then((response) => {
          this.$store.dispatch("setResults", response.data);
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({
            name: "error",
            query: { message: error.response.data },
          });
        });
    },
    // New function to change current page
    changePage(pageNumber) {
      if (pageNumber < 1) {
        pageNumber = 1;
      }
      if (pageNumber > Math.ceil(this.getResults.length / 10)) {
        pageNumber = Math.ceil(this.getResults.length / 10);
      }
      this.currentPage = pageNumber;
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
  padding-bottom: 5rem;
  text-align: center;
}
</style>
