<template>
  <div>
    <div class="p-0 m-0 container-fluid">
      <div class="p-0 m-0 row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="border-0 card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col-5 col-md-4">
                  <div class="text-center icon-big icon-warning">
                    <i class="nc-icon fa fa-money-bill text-primary"></i>
                  </div>
                </div>
                <div class="col-7 col-md-8">
                  <div class="numbers">
                    <p class="card-category">Last Investment</p>
                    <p class="card-title">
                      {{
                        dashCardData
                          ? dashCardData["amountUSD"]
                          : 0 | formatAmount("USD", "en-US")
                      }}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-calendar-o"></i> {{ getDate() | formatDate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="border-0 card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col-5 col-md-4">
                  <div class="text-center icon-big icon-warning">
                    <i class="nc-icon nc-money-coins text-success"></i>
                  </div>
                </div>
                <div class="col-7 col-md-8">
                  <div class="numbers">
                    <p class="card-category">Total Investment</p>
                    <p class="card-title">
                      {{
                        dashCardData
                          ? dashCardData["totalInvestmentUSD"]
                          : 0 | formatAmount("USD", "en-US")
                      }}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-calendar-o"></i> {{ getDate() | formatDate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="border-0 card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col-5 col-md-4">
                  <div class="text-center icon-big icon-warning">
                    <i class="nc-icon nc-send text-danger"></i>
                  </div>
                </div>
                <div class="col-7 col-md-8">
                  <div class="numbers">
                    <p class="card-category">Investments</p>
                    <p class="card-title">
                      {{
                        dashCardData ? dashCardData["totalInvestmentCount"] : 0
                      }}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-calendar-o"></i> {{ getDate() | formatDate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="border-0 card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col-5 col-md-4">
                  <div class="text-center icon-big icon-warning">
                    <i class="nc-icon nc-credit-card text-warning"></i>
                  </div>
                </div>
                <div class="col-7 col-md-8">
                  <div class="numbers">
                    <p class="card-category">Available Balance</p>
                    <p class="card-title">
                      {{
                        userDetails.profile.available_balance
                          | formatAmount("USD", "en-US")
                      }}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-calendar-o"></i> {{ getDate() | formatDate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="border-0 card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col-5 col-md-4">
                  <div class="text-center icon-big icon-info">
                    <i class="nc-icon nc-vector text-info"></i>
                  </div>
                </div>
                <div class="col-7 col-md-8">
                  <div class="numbers">
                    <p class="card-category">Withdrawal Points</p>
                    <p class="card-title">
                      {{ userDetails.profile.withdrawal_point }}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-calendar-o"></i> {{ getDate() | formatDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailsCard",
  props: {
    userDetails: {
      type: Object,
    },
    dashCardData: {
      type: Object,
    },
  },
  methods: {
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      return today;
    },
  },
};
</script>

<style scoped>
.balance {
  font-size: 16px;
  color: #ffffff;
}
.card-title {
  font-size: 1.2rem !important;
  font-weight: bold;
}
.date {
  font-size: 16px;
  color: #ffffff;
}
</style>
