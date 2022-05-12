<template>
  <div>
    <footer class="pt-3 mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="mt-3 col-md-6 col-sm-6">
              <!--Column1-->
              <div class="footer-pad">
                <h4 class="mb-3">MoreBitcoin</h4>
                <p>Your Future Investment Partner</p>
                <p>
                  We trade in monetary, financial and crypto currency in various
                  large scaled markets. Our company aims at achieving great
                  milestones for customers.
                </p>
              </div>
            </div>

            <div class="mt-3 col-md-3 col-sm-6">
              <!--Column1-->
              <div class="footer-pad">
                <h4>Useful Links</h4>
                <ul class="list-unstyled">
                  <li><router-link to="#">About us</router-link></li>
                  <li><router-link to="#">Contact us</router-link></li>
                  <li><router-link to="#">Our Plans</router-link></li>
                  <li><router-link to="#">How it Works</router-link></li>
                </ul>
              </div>
            </div>
            <div class="mt-3 col-md-3 col-sm-6">
              <h4>Others</h4>
              <ul class="list-unstyled">
                <li><router-link to="#">Privacy Policy</router-link></li>
                <li><router-link to="#">Terms of Service</router-link></li>
                <li><router-link to="#">Read our FAQs</router-link></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="mt-3 col-md-12 copy">
              <p class="mt-2 text-center">
                &copy; Copyright 2021 - Morebitcoin. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>


<style scoped>
h4 {
  font-weight: bold;
  font-size: 1.2rem;
}

footer {
  background: #000;
  color: #fff !important;
}

footer a {
  color: #fff;
  font-size: 0.9rem;
  transition-duration: 0.2s;
}

footer a:hover {
  color: #2689fd;
  opacity: 0.7;
  text-decoration: none;
}

.copy {
  font-size: 0.9rem;
  padding: 10px;
  border-top: 1px solid #a3a3a3;
}

.footer-middle {
  padding-top: 1rem;
}
</style>
