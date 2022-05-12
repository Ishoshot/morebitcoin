<template>
  <div>
    <section class="">
      <div class="container mb-5">
        <div class="container text-center">
          <h4 class="font-weight-bold title">Supported Investment(s)</h4>
          <div class="row justify-content-center align-self-center">
            <img src="/media/background/coins.png" class="img" />
          </div>
        </div>

        <div class="mt-3 text-center row">
          <div class="col">
            <h2 class="font-weight-bold title">Investment Plans</h2>
          </div>
        </div>

        <table class="table mt-3 table-responsive text-center">
          <tbody>
            <tr class="no-border">
              <th scope="row"></th>
              <td class="text-center">
                <h4 class="font-weight-bold">Hydrogen</h4>
                <router-link to="/login">
                  <button class="px-2 py-1 btn invest-btn font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-right"></i> Invest
                  </button>
                </router-link>
              </td>
              <td class="text-center">
                <h4 class="font-weight-bold">Helium</h4>
                <router-link to="/login">
                  <button class="px-2 py-1 btn invest-btn font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-right"></i> Invest
                  </button>
                </router-link>
              </td>
              <td class="text-center">
                <h4 class="font-weight-bold">Lithium</h4>
                <router-link to="/login">
                  <button class="px-2 py-1 btn invest-btn font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-right"></i> Invest
                  </button>
                </router-link>
              </td>
              <td class="text-center">
                <h4 class="font-weight-bold">Beryllium</h4>
                <router-link to="/login">
                  <button class="px-2 py-1 btn invest-btn font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-right"></i> Invest
                  </button>
                </router-link>
              </td>
              <td class="text-center">
                <h4 class="font-weight-bold">Boron</h4>
                <router-link to="/login">
                  <button class="px-2 py-1 btn invest-btn font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-right"></i> Invest
                  </button>
                </router-link>
              </td>
            </tr>
            <tr>
              <th scope="row">Amount [BTC]</th>
              <td>$10 BTC</td>
              <td>$500 BTC</td>
              <td>$5,000 BTC</td>
              <td>$20,000 BTC</td>
              <td>$50,000 BTC</td>
            </tr>
            <tr>
              <th scope="row">% Return</th>
              <td>100% capital in 7 days</td>
              <td>100% capital in 7 days</td>
              <td>100% capital in 7 days</td>
              <td>100% capital in 7 days</td>
              <td>100% capital in 7 days</td>
            </tr>
            <tr>
              <th scope="row">Total Duration</th>
              <td>84 days</td>
              <td>84 days</td>
              <td>35 days</td>
              <td>35 days</td>
              <td>35 days</td>
            </tr>
            <tr>
              <th scope="row">$ First Income</th>
              <td>$10 BTC - 7 days</td>
              <td>$500 BTC - 7 days</td>
              <td>$714.28 BTC - Daily</td>
              <td>$2,857.14 BTC - Daily</td>
              <td>$7,142 BTC - Daily</td>
            </tr>
            <tr>
              <th scope="row">$ Second Income</th>
              <td>$40 BTC - 28 days</td>
              <td>$2,000 BTC - 28 days</td>
              <td>$5,000 BTC - 7 days</td>
              <td>$20,000 BTC - 7 days</td>
              <td>$50,000 BTC - 7 days</td>
            </tr>
            <tr>
              <th scope="row">$ Third Income</th>
              <td>$210 BTC - 84 days</td>
              <td>$6,000 BTC - 84 days</td>
              <td>$25,000 BTC - 35 days</td>
              <td>$100,000 BTC - 35 days</td>
              <td>$250,000 BTC - 35 days</td>
            </tr>
            <tr>
              <th scope="row">Withdrawal Scope</th>
              <td>2</td>
              <td>2</td>
              <td>Daily</td>
              <td>Daily</td>
              <td>Daily</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Plans",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.img {
  width: 35rem;
  height: auto;
}

.title {
  color: #2689fd;
}

.invest-btn {
  border: 1px solid #2689fd;
  color: #2689fd;
  font-size: 0.7rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: transparent;
  transition: 0.5s all;
}

.invest-btn:hover,
.invest-btn:focus {
  background-color: #2689fd !important;
  color: #fff !important;
}
@import "../../assets/css/plans.css";
</style>