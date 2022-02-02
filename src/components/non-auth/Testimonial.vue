<template>
  <div class="container-fluid sp-py-8" id="testimonials">
    <div class="container">
      <div class="col-lg-12">
        <h2 class="text-center title">Don't just take our word for it!</h2>

        <div
          id="client-testimonial-carousel"
          class="mt-5 carousel slide row justify-content-center"
          data-ride="carousel"
        >
          <div class="carousel-inner col-lg-8" role="listbox">
            <div class="p-4 carousel-item active">
              <div class="testimonial-item">
                <img
                  src="/media/img/testimonial-1.png"
                  class="testimonial-img"
                  alt=""
                />
                <h3>John T. Davis</h3>
                <h4>Customer / Investor</h4>
                <p>
                  As an investor I am constantly searching for solid investment
                  opportunities and the ones presented by MoreBitcoin and the
                  team always rise to the top. I have invested in several plans
                  and each has met or exceeded my well-calculated projections.
                </p>
              </div>
            </div>
            <!--  -->
            <div class="p-4 carousel-item">
              <div class="testimonial-item">
                <img
                  src="/media/img/testimonial-1.png"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Lukas Neustadt</h3>
                <h4>Customer / Investor</h4>
                <p>
                  Simple, reliable, scalable, and consistent - that's what I
                  look for in passive investments and MoreBitcoin continues to
                  deliver. MoreBitcoin and the team do the heavy lifting,
                  generating competitive returns for investors in the form of
                  both cash and peace of mind.
                </p>
              </div>
            </div>
            <!--  -->
            <div class="p-4 carousel-item">
              <div class="testimonial-item">
                <img
                  src="/media/img/testimonial-1.png"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Sam Burns</h3>
                <h4>Customer / Investor</h4>
                <p>
                  I'm also consistently impressed with the communication - the
                  team is accessible, candid, and patient. It all adds up to the
                  return vs. risk being tremendously attractive, and I'm happy
                  to invest here over and over again.
                </p>
              </div>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="1"
            ></li>
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="2"
            ></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>

<style scoped>
.carousel-indicators li {
  background-color: #000;
}

#testimonials {
  background-color: #fafafb;
  /* border-radius: 3rem; */
}

.title {
  font-weight: bold;
  color: #2689fd;
  font-size: 2rem;
}
</style>