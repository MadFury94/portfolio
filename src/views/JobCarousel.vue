<template>
  <div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper h-screen w-[1300]"
    >
      <swiper-slide>
        <div class="h-full w-full xl:grid xl:grid-cols-1">
          <div class="h-full xl:relative xl:col-start-1">
            <div class="absolute z-10 px-24 bottom-44">
              <h1 class="font-semibold text-white text-4xl lg:text-6xl">
                See the moves always, Stay Composed.
                <br />
                <span class="text-gold-500">Advantage, Trader</span>
              </h1>
              <p class="z-10 text-white lg:text-2xl text-sm bottom-80 pb-6">
                Global naming partner of the IVF ATP ranking and Official Online
                Trading Partner of the ATP Tour.
              </p>
              <button
                @click="warnDisabled"
                class="defaultbutton text-white font-bold lg:text-xl"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
            </div>
            <img
              class="h-full w-full object-cover xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />

            <div
              aria-hidden="true"
              class="absolute top-0 h-32 bg-gradient-to-b from-black xl:inset-y-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full xl:grid xl:grid-cols-1">
          <div class="h-full xl:relative xl:col-start-1">
            <div class="absolute z-10 px-24 bottom-44">
              <h1 class="font-semibold text-white text-4xl lg:text-6xl">
                State of the Art Customer Representatives
                <br />
              </h1>
              <p class="z-10 text-white lg:text-2xl text-sm bottom-80 pb-6">
                The battle with inflation is not over yet, setting up a
                potential tumultuous. Trade the possibilities.
              </p>
              <div class="flex">
                <button
                  @click="warnDisabled"
                  class="defaultbutton text-white font-bold lg:text-xl"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <img
              class="h-full w-full object-cover xl:absolute xl:inset-0"
              src="/crypt7.jpg"
              alt="People working on laptops"
            />

            <div
              aria-hidden="true"
              class="absolute top-0 h-32 bg-gradient-to-b from-black xl:inset-y-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="h-full w-full xl:grid xl:grid-cols-1">
          <div class="h-full xl:relative xl:col-start-1">
            <div class="absolute z-10 px-24 bottom-44">
              <h1 class="font-semibold text-white text-4xl lg:text-6xl">
                When markets are volatile, you need a broker you can trust

                <br />
                <span class="text-gold-500">
                  Trade your edge with Starter-kit
                </span>
              </h1>
              <p class="z-10 text-white lg:text-2xl text-sm bottom-80 pb-6">
                The battle with inflation is not over yet, setting up a
                potential tumultuous. Trade the possibilities.
              </p>
              <div class="flex">
                <button
                  @click="warnDisabled"
                  class="defaultbutton text-white font-bold lg:text-xl"
                >
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg></button
                ><button
                  @click="warnDisabled"
                  class="regularbutton text-white font-bold lg:text-xl"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <img
              class="h-full w-full object-cover xl:absolute xl:inset-0"
              src="/crypt.png"
              alt="People working on laptops"
            />

            <div
              aria-hidden="true"
              class="absolute top-0 h-32 bg-gradient-to-b from-black xl:inset-y-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full xl:grid xl:grid-cols-1">
          <div class="h-full xl:relative xl:col-start-1">
            <div class="absolute z-10 px-24 bottom-44">
              <h1 class="font-semibold text-white text-4xl lg:text-6xl">
                When Markets are volatile, You need a broker you can trust.
                <br />
                <span class="text-gold-500">Trade your Edge with IVF</span>
              </h1>
              <p class="z-10 text-white lg:text-2xl text-sm bottom-80 pb-6">
                Global naming partner of the IVF ATP rankings and Official
                Online Trading Partner of the ATP Tour.
              </p>
              <button class="defaultbutton text-white font-bold lg:text-xl">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
            </div>
            <img
              class="h-full w-full object-cover xl:absolute xl:inset-0"
              src="/crypto5.jpg"
              alt="btc"
            />

            <div
              aria-hidden="true"
              class="absolute top-0 h-32 bg-gradient-to-b from-black xl:inset-y-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
        <div class="inset-1"></div>
      </swiper-slide>

      <!-- <swiper-slide class="text-center bg-black">
      <img src="" alt="" />
      <h1 class="pt-64 font-semibold text-5xl">
        Trusted <span class="text-white">Investment</span>
      </h1> </swiper-slide
    ><swiper-slide class="text-center bg-black">
      <img src="" alt="" />
      <h1 class="pt-64 font-semibold text-5xl">
        Trusted <span class="text-white">Investment</span>
      </h1>
    </swiper-slide> -->
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {} from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};

const disabled = ref(false);

function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
}
</script>

<style scoped>
.defaultbutton {
  @apply flex bg-gold-500 border-transparent font-semibold p-2 border-2 rounded-full hover:bg-gray-500  hover:text-white;
}
.regularbutton {
  @apply flex  border-transparent font-semibold p-2 border-2 rounded-full hover:bg-gray-500  hover:text-white;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
