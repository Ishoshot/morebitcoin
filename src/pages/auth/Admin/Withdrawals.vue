<template>
  <auth :active="activePage">
    <template v-slot:content>
      <div class="container-fluid sp-pt-5">
        <h4 class="font-weight-bold text-uppercase">All Withdrawals</h4>

        <div class="px-sm-2 px-md-0 sp-mb-10 sp-mt-5">
          <div class="container-fluid shadow border py-3 px-sm-3 px-lg-2 mt-3">
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                Currently Sorting By:
                <span class="font-weight-bold">{{
                  sortBy === "created_at" ? "Date" : sortBy
                }}</span>
              </div>
              <div>
                Sort Direction:
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
              :busy="!allWithdrawals.data"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :items="allWithdrawals.data"
              :fields="fields"
            >
              <template #head(serialNumber)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(amountUSD)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(amountBTC)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(status)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <template #head(created_at)="data">
                <span class="text-head">{{ data.label }}</span>
              </template>

              <!-- Serial Number -->
              <template #cell(serialNumber)="data">
                {{ data.index + 1 }}
              </template>

              <!-- Date Column Formatted -->
              <template #cell(created_at)="data">
                {{ data.item.created_at | formatDate }}
              </template>

              <template #cell(status)="data">
                <span
                  class="badge badge-pill badge-warning"
                  v-if="data.item.status === 'pending'"
                >
                  {{ data.item.status }}
                </span>
                <span
                  class="badge badge-pill badge-danger"
                  v-else-if="data.item.status === 'rejected'"
                >
                  {{ data.item.status }}
                </span>
                <span class="badge badge-pill badge-success" v-else>
                  {{ data.item.status }}
                </span>
              </template>

              <!-- View -->
              <template #cell(view)="data">
                <span
                  @click="_viewWithdrawal(data.item)"
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

            <div class="small text-left" v-if="allWithdrawals.data">
              <p v-if="allWithdrawals.data.length == 0">No withdrawals yet</p>
            </div>
            <!--  -->
            <div class="small text-left">
              Number of items:
              <b>{{
                !allWithdrawals.data ? "" : allWithdrawals.data.length
              }}</b>
            </div>
            <!--  -->
            <div class="d-flex justify-content-center mt-2">
              <pagination
                :data="allWithdrawals"
                @pagination-change-page="getWithdrawals"
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
  name: "Withdrawals",
  data() {
    return {
      activePage: "admin-withdrawals",
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
          key: "amountUSD",
          label: "AMOUNTUSD",
          sortable: true,
        },

        {
          key: "amountBTC",
          label: "AMOUNTBTC",
          sortable: true,
        },
        {
          key: "status",
          label: "STATUS",
          sortable: true,
        },

        {
          key: "created_at",
          label: "DATE",
          sortable: true,
        },

        {
          key: "view",
          label: "VIEW",
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["allWithdrawals"]),

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
    this.getWithdrawals();
  },

  methods: {
    ...mapActions(["fetchWithdrawals"]),

    async getWithdrawals(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      await this.fetchWithdrawals(page);
    },

    _viewWithdrawal(data) {
      this.$router.push({
        path: "/admin/withdrawal/" + data.id,
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
