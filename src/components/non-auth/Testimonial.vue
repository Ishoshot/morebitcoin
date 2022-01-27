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
                  src="/media/img/testimonial-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Oluwatobi Ishola</h3>
                <h4>Customer / Investor</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
              </div>
            </div>
            <!--  -->
            <div class="p-4 carousel-item">
              <div class="testimonial-item">
                <img
                  src="/media/img/testimonial-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Oluwatobi Ishola</h3>
                <h4>Customer / Investor</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
              </div>
            </div>
            <!--  -->
            <div class="p-4 carousel-item">
              <div class="testimonial-item">
                <img
                  src="/media/img/testimonial-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Oluwatobi Ishola</h3>
                <h4>Customer / Investor</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
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