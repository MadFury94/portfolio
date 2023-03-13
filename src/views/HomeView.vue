<template>
  <div>
    <div class="grid place-content-center p-10 clip-circle css-selector py-7">
      <div class="aspect-w-1 aspect-h-1">
        <img
          class="object-cover h-48 w-48 rounded-full"
          src="@\assets\img\portlogo.png"
        />
      </div>
    </div>
    <div class="flex justify-center items-center sm:px-10">
      <div class="py-10">
        <main class="flex flex-col lg:flex-row items-center">
          <div>
            <p class="dark:text-slate-900 text-xl">Hi, my name is</p>
            <h1 class="big-title uppercase">
              br<span
                class="font-bold underline decoration-slate-900 hover:text-slate-900"
                >IAN</span
              >
              Azukaeme
            </h1>
            <h1 class="text-5xl text-slate-500 font-bold">
              I am a Web Developer and Content Writer
            </h1>
            <p class="text-justify py-4 lg:w-[600px] regular-text">
              As a seasoned professional with extensive experience as a Senior
              Web Developer at Katalyst Technologies, Senior Content Writer/IT
              Specialist at ANBE Nig, and Blogger/Content Writer for DeltaBreed
              and NaijaGoat, I have honed my skills in writing, editing, and
              proofreading across various formats such as web, print, social
              media, email, and video. Moreover, with 9 years of experience
              using WordPress and 2 years using Vue, I am also an experienced
              web developer. I have collaborated with multiple teams to ensure
              that content strategy aligns with business goals, resulting in
              increased customer satisfaction and retention. I have a track
              record of successfully upselling customers on additional products
              and services, saving them money, and resolving their issues. In
              addition, I have managed the development and rollout of a mobile
              app, which led to a 50% increase in customer retention. As a team
              player, I possess excellent communication skills and have a
              passion for working collaboratively with cross-functional teams.
              My understanding of search engine optimization (SEO) techniques
              and best practices, along with my familiarity with analytics tools
              to measure the success of my content, has enabled me to make
              data-driven decisions. Additionally, I have worked with different
              subject matters and industries, and have excellent time management
              skills. Overall, my experience as a Content Writer/Creator, Senior
              Content Writer/IT Specialist, Blogger/Content Writer, and
              experienced web developer demonstrates my ability to produce
              high-quality, engaging, and informative content that drives
              conversions and sales, while ensuring an extraordinary customer
              experience.
            </p>
          </div>
          <ul class="space-y-3 gap-x-10 dark:text-white">
            <li v-for="(item, index) in contacts" :key="index">
              <a class="flex items-center" :href="item.link"
                ><i :class="item.image"></i
                ><span class="underline pl-2"> {{ item.social }}</span></a
              >
            </li>
            <ButtonComponent
              @click="downloadResume"
              title="Download Resume"
              icon="fal fa-cloud-download"
            />
          </ul>
        </main>
      </div>
    </div>
    <div class="big-title items-start place-content-start px-10 lg:px-60">
      <div class="" v-for="(item, index) in workItem" :key="index">
        <div class="">
          View some of my
          <router-link
            class="py-20 capitalize text-green-500 underline cursor-pointer"
            :to="{ name: item.name }"
          >
            {{ item.title }}</router-link
          >
        </div>
      </div>
    </div>

    <div v-if="false" class="py-10 grid grid-cols-4 md:grid-cols-1">
      <div class="bg-green-300">red</div>
      <div class="bg-black">red</div>
      <div class="bg-white">red</div>
      <div class="bg-yellow-400">red</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { workItem } from "../../export";
import ButtonComponent from "@/views/ButtonComponent.vue";

const routes = [{ path: "/about", name: "about", title: "about" }];

const contacts = [
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/azukaeme-brian-4329b0246/",
    image: "fab fa-linkedin",
  },

  /*  {
    social: "Twitter",
    link: "",
    image: "fab fa-twitter",
  },*/
  {
    social: "Onochieazukaeme@gmail.com",
    link: "mailto:onochieazukaeme@gmail.com?Subject=Enquiry",
    image: "fal fa-envelope",
  },
];

function downloadResume() {
  const link = document.createElement("a");
  link.href = new URL(
    "../downloads/front-end-developer.pdf",
    import.meta.url
  ).href;

  link.download = "front-end-developer.pdf";

  link.click();
}
</script>

<style>
.nowrap {
  white-space: nowrap;
}

.st0 {
  fill: #f4dd0c;
}
.st1 {
  fill: #065f46;
}
.clip-circle {
  clip-path: circle(85px at center);
  clip-path: circle(15% at 50% 50%);
  shape-outside: circle(42% at 50% 50%);
  /* OLD VALUE example: circle(245px, 140px, 50px); */
  /* Yep, even the new clip-path has deprecated stuff. */
}

.css-selector {
  background: linear-gradient(270deg, #065f46, #4b0082, #065f46);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  -o-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-o-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
