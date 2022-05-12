<template>
  <auth :active="activePage">
    <template v-slot:content>
      <div class="container-fluid sp-pt-5">
        <h4 class="font-weight-bold text-uppercase">ALL INVESTMENTS</h4>

        <div class="px-sm-2 px-md-0 sp-mb-10 sp-mt-5">
          <div class="container-fluid shadow border py-3 px-sm-3 px-lg-2 mt-3">
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <div class="my-3 small">
                Currently Sorting By:
                <span class="font-weight-bold text-muted">{{
                  sortBy_ == "" ? sortBy : sortBy_
                }}</span>
                | Sort Direction:
                <span class="font-weight-bold">{{
                  sortDesc ? "Descending" : "Ascending"
                }}</span>
              </div>
            </div>

            <!----Transactions Table --->
            <b-table
              class="mt-2"
              id="table-transition-example"
              responsive
              :fixed="false"
              :sticky-header="false"
              :busy="!paginatedInvestments.data"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :items="paginatedInvestments.data"
              :fields="fields"
              :selectable="true"
              :select-mode="'single'"
              ref="selectableTable"
              @row-selected="onSelect"
            >
              <template #head(serialNumber)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(plan)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(amountUSD)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(amountBTC)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(reference)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(status)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(created_at)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(time)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <!-- Serial Number -->
              <template #cell(serialNumber)="data">
                {{ data.index + 1 }}
              </template>

              <!-- Plan -->
              <template #cell(plan)="data">
                {{ data.item.plan }}
              </template>

              <!-- Amount USD -->
              <template #cell(amountUSD)="data">
                {{ data.item.amountUSD }}
              </template>

              <!-- Amount BTC -->
              <template #cell(amountBTC)="data">
                {{ data.item.amountBTC }}
              </template>

              <!-- Reference -->
              <template #cell(reference)="data">
                {{ data.item.reference }}
              </template>

              <!-- Status -->
              <template #cell(status)="data">
                <span
                  class="badge badge-pill badge-info"
                  v-if="data.item.status === 'created'"
                >
                  {{ data.item.status }}
                </span>
                <span
                  class="badge badge-pill badge-warning"
                  v-else-if="data.item.status === 'initiated'"
                >
                  {{ data.item.status }}
                </span>
                <span
                  class="badge badge-pill badge-danger"
                  v-else-if="data.item.status === 'abandoned'"
                >
                  {{ data.item.status }}
                </span>
                <span class="badge badge-pill badge-success" v-else>
                  {{ data.item.status }}
                </span>
              </template>

              <!-- Date Column Formatted -->
              <template #cell(updated_at)="data">
                {{ data.item.created_at | formatDate }}
              </template>

              <!-- Date Column Formatted -->
              <template #cell(time)="data">
                {{ data.item.created_at | formatTime }}
              </template>

              <template #cell(action)="data">
                <span
                  @click="choose(data.item.id)"
                  class="badge badge-pill badge-success py-2 px-3"
                >
                  View
                </span>
              </template>

              <!-- Loading while fecting Data from DB -->
              <template #table-busy>
                <div class="text-center text-danger mt-5">
                  <i class="fa fa-spinner fa-spin fa-2x mr-2"></i>
                  <strong>Loading...</strong>
                </div>
              </template>
            </b-table>

            <div class="small text-left">
              Number of items:
              <b>{{
                !paginatedInvestments.data
                  ? ""
                  : paginatedInvestments.data.length
              }}</b>
            </div>

            <div class="d-flex justify-content-center mt-2">
              <pagination
                :data="paginatedInvestments"
                @pagination-change-page="getInvestments"
              >
                <span slot="prev-nav">Prev</span>
                <span slot="next-nav">Next</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </template>
  </auth>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Investments",
  data() {
    return {
      activePage: "investments",
      sortBy: "serialNumber",
      headVariant: "dark",
      sortDesc: false,
      editing: false,
      selectible: false,
      selected: [],
      fields: [
        {
          key: "serialNumber",
          label: "S/N",
          sortable: true,
        },
        {
          key: "plan",
          label: "Plan",
        },
        {
          key: "amountUSD",
          label: "AmountUSD",
        },
        {
          key: "amountBTC",
          label: "AmountBTC",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
        {
          key: "reference",
          label: "Reference",
        },
        {
          key: "time",
          label: "TIME",
          sortable: true,
        },
        {
          key: "updated_at",
          label: "DATE",
          sortable: true,
        },

        {
          key: "action",
          label: "View",
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["paginatedInvestments"]),
    sortBy_() {
      if (this.sortBy == "updated_at") {
        return "Date";
      } else if (this.sortBy == "serialNumber") {
        return "Serial Number";
      } else if (this.sortBy == "status") {
        return "Status";
      } else {
        return "";
      }
    },
  },

  created() {
    this.getInvestments();
  },

  methods: {
    ...mapActions(["fetchInvestments"]),

    async getInvestments(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      await this.fetchInvestments(page);
    },

    onSelect(item) {
      this.selected = item;
      this.$router.push({
        path: "/investment/" + this.selected[0].id,
      });
    },

    choose(item) {
      return this.$router.push({
        path: "/investment/" + item,
      });
    },
  },
};
</script>

<style scoped>
.small {
  font-size: 0.8rem;
  color: #6d6c6cf3;
  text-transform: capitalize;
}

table.b-table[aria-busy="true"] {
  opacity: 0.6;
}

.text-head {
  color: #111;
}

h4 {
  color: #115b94;
}
</style>
