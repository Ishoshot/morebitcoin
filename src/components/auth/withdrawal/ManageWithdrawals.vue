<template>
  <div class="px-sm-0 px-md-0 sp-mb-10">
    <div
      class="container-fluid shadow-sm py-3 px-sm-3 px-lg-2 mt-3"
      :class="!createWithdrawal ? 'border' : ''"
    >
      <!-- Sort, Direction Info -->
      <div class="d-flex justify-content-between mb-3 small">
        <div>
          Sorting By:
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

      <p class="text-success small">{{ withBackEndSuccess }}</p>

      <b-table
        class="mt-2"
        id="table-transition-example"
        responsive
        :fixed="false"
        :borderless="createWithdrawal"
        :sticky-header="false"
        :busy="!userWithdrawals.data"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :items="userWithdrawals.data"
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

      <div class="small text-left" v-if="userWithdrawals.data">
        <p v-if="userWithdrawals.data.length == 0">
          You haven't made any withdrawal
        </p>
      </div>
      <!--  -->
      <div class="small text-left">
        Number of items:
        <b>{{ !userWithdrawals.data ? "" : userWithdrawals.data.length }}</b>
      </div>
      <!--  -->
      <div class="d-flex justify-content-center mt-2">
        <pagination
          :data="userWithdrawals"
          @pagination-change-page="getUserWithdrawals"
        >
          <span slot="prev-nav">Prev</span>
          <span slot="next-nav">Next</span>
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ManageWithdrawals",
  props: {
    createWithdrawal: {
      required: true,
    },
  },
  data() {
    return {
      sortBy: "serialNumber",
      sortDesc: false,
      headVariant: "dark",
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
    ...mapGetters(["userWithdrawals", "withBackEndSuccess"]),
  },

  created() {
    this.getUserWithdrawals();
  },

  methods: {
    ...mapActions(["fetchUserWithdrawals"]),

    async getUserWithdrawals(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      await this.fetchUserWithdrawals(page);
    },

    _viewWithdrawal(data) {
      this.$router.push({
        path: "/withdrawal/" + data.id,
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
</style>
