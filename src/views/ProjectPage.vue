<template>
  <div class="py-20">
    <h1 class="title font-bold">My Portfolio</h1>
    <div class="hidden lg:inline">
      <div
        v-for="(item, index) in projects"
        :key="index"
        class="grid lg:grid-cols-3 my-10"
      >
        <div
          :class="isEven(index) ? 'lg:order-1 ' : ''"
          class="p-8 rounded-r-2xl"
        >
          <a
            style="width: 500px; height: 300px"
            target="_blank"
            class="rounded-md"
            :href="item.link"
          >
            <div class="relative rounded-md order-1">
              <div
                v-show="!showImage"
                :class="isEven(index) ? 'lg:rounded-l-2xl' : 'lg:rounded-r-2xl'"
                class="placeholder-img w-full object-fill"
              ></div>

              <img
                v-show="showImage"
                class="rounded-md pb-8"
                :src="`/images/projects/${item.img} `"
                @load="imageLoaded"
              />
            </div>
          </a>
        </div>
        <div class="lg:col-span-2">
          <div
            :class="isEven(index) ? 'lg:rounded-l-2xl' : 'lg:rounded-r-2xl'"
            class="w-full object-fill"
          ></div>
          <div class="regular-text space-y-4">
            <h1
              class="font-bold regular-text text-2xl"
              :class="isOddNumber(index) ? '' : 'lg:text-right'"
            >
              {{ item.name }}
            </h1>

            <div :class="isOddNumber(index) ? 'text-left' : 'lg:text-right'">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-md p-4">
                <div>
                  <p class="">{{ item.description }}</p>
                </div>
              </div>
              <div
                class="flex"
                :class="isOddNumber(index) ? '' : 'lg:justify-end'"
              >
                <div>
                  <h3 class="mt-4 text-slate-900">Responsibility</h3>
                  <ul
                    class="flex flex-row space-x-2 font-medium pb-4 text-right text-slate-900"
                  >
                    <li
                      v-for="(roles, index) in item.roles"
                      :key="index"
                      class="text-slate-900"
                    >
                      {{ roles }}
                    </li>
                  </ul>
                  <div class="flex gap-x-4">
                    <a
                      v-if="item.github"
                      class="flex"
                      :class="isOddNumber(index) ? '' : 'justify-end'"
                      target="_blank"
                      :href="item.github"
                    >
                      <i class="fab fa-github font-bold py-4"></i>
                    </a>
                    <a
                      class="flex"
                      :class="isOddNumber(index) ? '' : 'justify-end'"
                      target="_blank"
                      :href="item.link"
                    >
                      <i class="fad fa-external-link-alt font-bold py-4"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--mobile view-->

    <div
      class="tab py-10 lg:hidden px-4"
      v-for="(item, index) in projects"
      :key="index"
    >
      <div class="lg:flex justify-between gap-x-10 gap-y-10">
        <div class="" :class="isOddNumber(index) ? 'lg:order-1 flex-1' : ''">
          <a
            style="width: 500px; height: 300px"
            target="_blank"
            class="rounded-md"
            :href="item.link"
          >
            <div class="relative lg:rounded-md rounded-md order-1">
              <img
                class="rounded-md pb-8"
                style="width: 500px; height: 300px"
                :src="`/images/projects/${item.img} `"
              />
            </div>
          </a>
        </div>
        <div class="regular-text space-y-4">
          <h1
            class="font-bold regular-text text-2xl"
            :class="isOddNumber(index) ? '' : 'lg:text-right'"
          >
            {{ item.name }}
          </h1>

          <div :class="isOddNumber(index) ? 'text-left' : 'lg:text-right'">
            <div
              class="bg-gray-100 dark:bg-gray-700 rounded-md lg:rounded-md p-4"
            >
              <div>
                <p>{{ item.description }}</p>
              </div>
            </div>
            <div
              class="flex"
              :class="isOddNumber(index) ? '' : 'lg:justify-end'"
            >
              <div>
                <h3 class="mt-4 text-slate-900">Responsibility</h3>
                <ul
                  class="flex flex-row space-x-2 text-slate-200 font-medium pb-4 text-right"
                >
                  <li
                    v-for="(roles, index) in item.roles"
                    :key="index"
                    class="text-slate-900"
                  >
                    {{ roles }}
                  </li>
                </ul>
                <div class="flex gap-x-4">
                  <a
                    v-if="item.github"
                    class="flex"
                    :class="isOddNumber(index) ? '' : 'justify-end'"
                    target="_blank"
                    :href="item.github"
                  >
                    <i class="fab fa-github font-bold py-4"></i>
                  </a>
                  <a
                    class="flex"
                    :class="isOddNumber(index) ? '' : 'justify-end'"
                    target="_blank"
                    :href="item.link"
                  >
                    <i class="fad fa-external-link-alt font-bold py-4"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--mobile view-->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const projects = ref([
  {
    name: "Anbe Nigeria Ltd",
    link: "https://anbenig.com",
    img: "anbenig.jpg",
    description: `I have extensive experience in website design and development, as demonstrated by my work on a WordPress website for Anbe Nigeria. Using the Divi theme, I was able to create a visually appealing and user-friendly website consisting of 13 pages. The design process began with a Figma prototype, which was then refined and developed using WordPress and the Divi theme. My strong attention to detail and ability to work efficiently ensured that the final website met all of the client's requirements and was launched successfully.`,
    roles: [
      "Ideation,",
      "Design,",
      "Ui / Ux, ",
      "Frontend, Backend",
      "WordPress",
      "Content-Writing",
    ],
  },
  {
    name: "Tracker Shop",
    link: "https://www.trackershop.com.ng/",
    img: "tracker.jpg",
    description: `I have extensive experience in website design and development, as demonstrated by my work on the Tracker Shop website, the No.1 GPS Fleet & Car Tracker Installer in Nigeria. Using the Hello Elementor theme, I was able to create a visually appealing and user-friendly website consisting of 13 pages. The design process began with a Figma prototype, which was then refined and developed using WordPress and the Hello Elementor theme. My strong attention to detail and ability to work efficiently ensured that the final website met all of the client's requirements and was launched successfully. The Tracker Shop website is now a reliable and professional online presence for the company, helping them reach new customers and grow their business.`,
    roles: [
      "Ideation,",
      "Design,",
      "Ui / Ux, ",
      "Frontend, Backend",
      "WordPress",
      "Content-Writing",
      "Elementor",
    ],
  },
  {
    name: "H2O Doorstep Water Delivery",
    link: "https://h2o.ng",
    img: "h2o.jpg",
    description: `H2O is an e-commerce application that allows customers to purchase water products online. It was developed using Vue.js and Figma was utilized for prototyping, wireframing, and ideation during the development process`,
    roles: ["Ideation,", "Design,", "Ui / Ux, ", "Frontend", "Content-Writing"],
  },
  {
    name: "Grand Eagle Travels",
    link: "https://getravelandtours.com/",
    github: "https://github.com/Katalyst33/grand-front",
    img: "grand-eagle.jpg",

    description: `Grand Eagle Travels is a web-based travel agency application that allows users to book and process travel destinations with the agency. It features an administrator dashboard for managing travel destinations and processing personal information, as well as a user dashboard for users to provide information and manage their destination. The application was developed to provide a convenient and efficient platform for booking travel arrangements.`,

    roles: [
      "Ideation,",
      "Ui / Ux, ",
      "Frontend,",
      "Backend ",
      "Content-Writing",
    ],
  },
  {
    name: "Wildstream Music",
    link: "https://www.wildstream.ng/",
    img: "wildstream.jpg",
    description: `Wildstream Music is a Nigeria-based music streaming service that offers a platform for local and international artists to share their work. It has been nicknamed the "Soundcloud of Nigeria" due to its large size and daily uploads of over 1000 songs. The service has been designed with a focus on user experience and interface design, with the goal of providing an enjoyable and easy-to-use platform for music discovery and streaming.`,
    roles: ["Design,", "Ui / Ux,", "Content-Writing"],
  },
  {
    name: "Hensek Group",
    link: "http://www.hensekgroup.com/",
    img: "hensek.jpg",
    description: `I have a successful track record in website design and development, as demonstrated by my work on the Hensek Construction Company website. Utilizing the Hello Elementor theme, I was able to create a visually appealing and user-friendly website that effectively showcases the company's services and portfolio. My design process always begins with a Figma prototype, which I then refine and develop using WordPress and the Hello Elementor theme. My strong attention to detail and efficient work ethic ensured that the final website met all of the client's requirements and was launched successfully. The Hensek Construction Company website is now a professional online presence that helps the company attract new clients and grow their business in the construction industry.`,
    roles: ["Web developer, ", "WordPress", "Content-Writing"],
  },
  {
    name: "Sprynx Multi",
    link: "https://www.sprynxmulti.com/",
    img: "sprynxmulti.jpg",
    description: `Sprynx Multi is a WordPress-based company website that offers a range of car washing services. It includes an administrative dashboard for managing and updating content on the website, as well as a button linking to the owner's WhatsApp for easy communication and booking of services. The website was developed to provide a professional and user-friendly platform for customers to learn about and engage with the company's offerings.`,
    roles: ["Senior Web developer", "Content-Writing"],
  },
  {
    name: "Harriet Travels",
    link: "https://harriettravels.co.za/",
    img: "harriet.jpg",
    description: `Harriet Travels is a professional travel agency website developed using WordPress. The website offers a range of travel services and includes an administrative dashboard for managing and updating content on the site. Customers can easily communicate with the agency and book services through a convenient WhatsApp button. The website was designed to provide a user-friendly platform for customers to learn about and engage with the company's travel offerings. Harriet Travels is now able to effectively showcase their services and reach new customers through their professional and reliable online presence.`,
    roles: ["Senior Web developer", "Content-Writing", "WordPress"],
  },
  {
    name: "Simps Homes",
    link: "https://https://simpshomes.com/",
    img: "simps.jpg",
    description: `Simpshome is a real estate company that offers a web-based platform for booking appointments and renting properties. The website, developed using a content management system (CMS), features an administrative dashboard for managing content and updating information about the company and its offerings. The platform was designed to provide a convenient and efficient way for customers to interact with the company and access its services.`,
    roles: ["Senior WordPress developer", "Content-Writing"],
  },
  {
    name: "BigBen Fashion",
    link: "https://www.bigbenfashionnig.com/",
    img: "bigben.jpg",
    description: `Big Ben Fashion is an e-commerce website developed using WordPress for an online fashion retail company. The website features a content management system (CMS) for managing and updating content, and was designed to provide a user-friendly platform for customers to browse and purchase fashion products.`,
    roles: ["Lead Web developer"],
  },
  {
    name: "Weather-App",
    link: "https://weather-app-ux23.vercel.app/",
    img: "weather.jpg",
    description: `I developed the weather-app as a personal project utilizing Vue.js and tailwind while also implementing an API from open weather. It aids users in knowing the weather situation of anywhere in the world for a week straight`,
    roles: ["Web developer"],
  },
  {
    name: "My Portfolio Website",
    link: "https://brianazukaeme.me",
    img: "port.jpg",
    github: "https://github.com/MadFury94/portfolio.git",
    description: `My Portfolio website that  displays my work and my skills. it features a light and dark mode, for users with accessibility challenges`,
    roles: ["Ideation,", "Design,", "Ui / Ux, ", "Frontend", "Content-Writing"],
  },
]);

const showImage = ref(false);

function imageLoaded() {
  showImage.value = true;
}

function isOddNumber(num: number) {
  return num % 2 !== 0;
}
function isEven(value: number) {
  return value % 2 !== 0;
}
</script>

<style>
.project-img {
  height: 400px;
  width: 400px;
  color: white;

  background: linear-gradient(to top, #1d45508e, #1d45508e),
    url(https://picsum.photos/1280/853/?random=1) no-repeat top center;
}
.project-img:hover {
  background: linear-gradient(transparent, #24d528),
    url(https://picsum.photos/1280/853/?random=2) no-repeat top center;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.placeholder-img {
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #e0ded1 10%, #fefbeb 18%, #e0ded1 33%);
  background-size: 800px 104px;

  padding: 0.5em 0.5em 0.5em;
  height: 20rem;
}
</style>
