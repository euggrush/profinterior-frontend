<template>
  <!-- Contact-->
  <section class="contact-section bg-black">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Address</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50 numbers">
                4923 Market Street, Orlando FL
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Электронная почта</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">
                <a class="numbers" href="#!">hello@yourdomain.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Телефон</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50 numbers">+7 (919) 612-38-12</div>
            </div>
          </div>
        </div>
      </div>
      <div class="social d-flex justify-content-center">
        <a class="mx-2 social-vk" href="https://vk.com/ufa_design_interior"></a>
        <a
          class="mx-2 social-instagram"
          href="https://www.instagram.com/design_interior_ufa_/"
        ></a>
        <a
          class="mx-2 social-behance"
          href="https://www.behance.net/larionovadesign"
        ></a>
        <a
          class="mx-2 social-pinterest"
          href="https://www.pinterest.ru/interiordesignufa/_created/"
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-section {
  padding-top: 5rem;
}
.contact-section .card {
  border: 0;
  border-bottom: 0.25rem solid #64a19d;
}
.contact-section .card h4,
.contact-section .card .h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}
.contact-section .card hr {
  border-color: #64a19d;
  border-width: 0.25rem;
  width: 3rem;
}
.contact-section .social {
  margin-top: 5rem;
}
.contact-section .social a {
  text-align: center;
  height: 3rem;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  background-position: center;
  background-size: 2.8rem auto;
  background-repeat: no-repeat;
  border-radius: 100%;
  line-height: 3rem;
  color: rgba(255, 255, 255, 0.3);
}
.contact-section .social a:hover {
  color: rgba(255, 255, 255, 0.5);
}
.contact-section .social a:active {
  color: #fff;
}
.social-behance {
  background-image: url("../../assets/img/icon-behance.png");
}
.social-instagram {
  background-image: url("../../assets/img/icon-instagram.png");
}
.social-vk {
  background-image: url("../../assets/img/icon-vk.png");
}
.social-pinterest {
  background-image: url("../../assets/img/icon-pinterest.png");
}
</style>