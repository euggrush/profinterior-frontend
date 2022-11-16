<template>
  <!-- Signup-->
  <section class="signup-section" id="signup">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <!-- <article class="border">
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
          </article> -->

          <article class="text-white text-start">
            <h3>Этапы создания и реализации вашго интерьера</h3>
            <ol>
              <li class="mt-3">
                <p>этап: разработка концепции</p>
                <ul>
                  <li>выполнение обмеров объекта</li>
                  <li>разработка концепции и стилевого решения</li>
                  <li>функциональное зонирование объекта</li>
                  <li>
                    разработка вариантов планировочных решений с расстановкой
                    мебели и оборудования
                  </li>
                  <li>объемное моделирование интерьера помещений</li>
                  <li>подробная и реалистичная 3D визуализация</li>
                  <li>
                    начальный этап подбора отделочных и декоративных материалов
                  </li>
                </ul>
              </li>

              <li class="mt-3">
                <p>этап: технологические решения.</p>
                <p>Разработка чертежей:</p>
                <ul>
                  <li>план обмеров помещения</li>
                  <li>план демонтажа перегородок</li>
                  <li>план возводимых перегородок</li>
                  <li>план помещений после перепланировки с размерами</li>
                  <li>план потолков</li>
                  <li>разрезы потолков</li>
                  <li>план расположения светильников</li>
                  <li>план расположения выключателей</li>
                  <li>план расположения розеток</li>
                  <li>план привязки светильников и выключателей</li>
                  <li>план полов с указанием типа покрытий</li>
                  <li>
                    развертки стен с раскладкой плитки,декоративных
                    элементов,росписей,конструкций,витражей
                  </li>
                  <li>
                    чертежи нестандартных и авторских деталей декоративного
                    оформления (камины, лестницы, ковка, арки, двери и другие
                    элементы интерьера и декора)- при необходимости
                  </li>
                </ul>
              </li>

              <li class="mt-3">
                <p>
                  этап: авторское сопровождение проекта,подбор мебели,
                  материалов и оборудования.
                </p>
                <ul>
                  <li>
                    подбором мебели,освещения,отделочных материалов и
                    оборудования
                  </li>
                  <li>
                    декорирование интерьера
                    <ul>
                      <li>ткани</li>
                      <li>ковры</li>
                      <li>аксессуары</li>
                      <li>элементы интерьера</li>
                    </ul>
                  </li>
                  <li>выезд дизайнера на объект (по договоренности)</li>
                  <li>
                    консультации и контроль за соблюдением выполнения данного
                    проекта
                  </li>
                  <li>
                    консультация и оказание помощи в приобритении отделочных
                    материалов, элементов интерьера и декора
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Стоимость проекта рассчитывается – за 1 м2 площади пола и зависит
              от выбранного Вами стиля. По дополнительному согласованию с
              клиентом возможно увеличение количества ракурсов помещений в 3D и
              пересмотр количества встреч для авторского надзора.
            </p>
            <p>
              При расчете стоимости дизайн-проекта учитывается то, что, кроме
              основных этапов работы, осуществляется целый ряд дополнительных
              услуг по сопровождению ремонтных работ. На всех этапах воплощения
              дизайн-проекта в жизнь происходит контроль за качеством
              выполняемых работ, предлагаются консультации и помощь по вопросам
              реализации проекта. Дизайн-проект включает в себя подбор
              материалов, мебели, оборудования и прочих элементов интерьера, а
              также участие дизайнера на этапе декорирования помещений: выбор
              штор, ковров, аксессуаров для кухни, санузла, ванной и прочих
              элементов декора. В результате нашей работы, заказчик получает
              полное соответствие созданного интерьера и его графического
              представления, идеальное сочетание каждого элемента.
            </p>
          </article>

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
                  class="btn btn-primary disabled w-100 h-100 mt-3 mt-md-0"
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