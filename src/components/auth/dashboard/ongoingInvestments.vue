<template>
  <div class="container-fluid">
    <div class="d-flex flex-column justify-content-between">
      <div class="overview-title">Ongoing Investments</div>
      <div class="d-flex flex-row justify-content-between align-items-center">
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
        :busy="!paginatedOngoingDashboardInvestments.data"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :items="paginatedOngoingDashboardInvestments.data"
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

        <template #head(updated_at)="data">
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
          {{ data.item.updated_at | formatDate }}
        </template>

        <!-- Date Column Formatted -->
        <template #cell(time)="data">
          {{ data.item.updated_at | formatTime }}
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ongoingInvestments",
  props: {
    paginatedOngoingDashboardInvestments: {
      type: Object,
    },
  },
  data() {
    return {
      sortBy: "serialNumber",
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

  methods: {
    onSelect(item) {
      this.selected = item;
      this.$router.push({
        path: "/investment/" + this.selected[0].id,
      });
      // console.log(this.selected[0]);
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

.text-view {
  color: #5b7cce;
  font-weight: bold;
  font-size: 14px;
}

.overview-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.text-head {
  color: #888282f6;
}

.btn-view {
  background: transparent;
  border: 1px solid #5b7cce;
  color: #5b7cce;
  padding: 0.3em;
  font-weight: bold;
}

.btn-view:hover {
  background: #5b7cce !important;
  color: #fff;
  font-weight: bold;
}
</style>
