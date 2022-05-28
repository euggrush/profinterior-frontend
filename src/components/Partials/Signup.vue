<template>
  <!-- Signup-->
  <section class="signup-section" id="signup">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <blockquote class="text-white">
            Дизайн интерьера как искусство
          </blockquote>
          <blockquote class="text-white">Индивидуальный подход</blockquote>
          <blockquote class="text-white">Идея и реализация</blockquote>
          <blockquote class="text-white">Авторский надзор</blockquote>
          <blockquote class="text-white">Комплектация</blockquote>
          <blockquote class="text-white">Планировочные решения</blockquote>
          <blockquote class="text-white">
            Создание неповторимого образа жизни
          </blockquote>
          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mt-5 mb-5">заявка на дизайн</h2>
          <form
            class="form-signup"
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
          >
            <!-- Email address input-->
            <div class="row">
              <div class="col-12 col-md-8">
                <input
                  class="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Введите адрес электронной почты..."
                  aria-label="Enter email address..."
                  data-sb-validations="required,email"
                />
              </div>
              <div class="col-12 col-md-4">
                <button
                  class="btn btn-primary disabled w-100 mt-3 mt-md-0"
                  id="submitButton"
                  type="submit"
                >
                  Отправить
                </button>
              </div>
            </div>

            <div
              class="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:required"
            >
              An email is required.
            </div>
            <div
              class="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:email"
            >
              Email is not valid.
            </div>

            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3 mt-2 text-white">
                <div>Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms"
                  >https://startbootstrap.com/solution/contact-forms</a
                >
              </div>
            </div>

            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3 mt-2">
                Error sending message!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signup-section {
  padding-top: 5rem;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 75%,
      #000 100%
    ),
    url("../../assets/img/bg-signup2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.signup-section .form-signup input {
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  padding: 1.25rem 2rem;
  height: auto;
  font-size: 80%;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  border: 0;
}
</style>