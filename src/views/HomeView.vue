<template>
  <div>
    <div class="grid place-content-center p-8 css-selector clip-circle py-7">
      <img class="rounded-full h-[400px]" src="@\assets\img\portlogo.png" />
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
            <h1 class="text-5xl text-slate-200 font-bold">
              I specialize in Making the web work for you
            </h1>
            <p class="text-justify py-4 lg:w-[600px] regular-text">
              As a skilled front-end developer with over 9 years of experience,
              I specialize in creating engaging and functional web interfaces
              using the latest technologies, including Vue and React. My
              expertise in web development and strong background in design have
              made me a valuable asset to any team or project. At Katalyst
              Technologies, a top IT firm in Port Harcourt, I served as the lead
              designer, responsible for developing and implementing engaging web
              experiences for a variety of clients. Utilizing my skills in
              WordPress website development and my ability to work with new
              technologies, I have consistently delivered high-quality,
              user-friendly websites and online applications for my clients. In
              addition to my specialization in front-end development, I am
              proficient in WordPress website development and have a strong
              background in web design. I am always seeking new opportunities to
              learn and grow, and am excited to work with new web development
              technologies to create well-functioning and user-friendly websites
              and online applications.
            </p>
          </div>
          <ul class="space-y-3 gap-x-10 text-white">
            <li v-for="(item, index) in contacts" :key="index">
              <a :href="item.link"
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
    <div class="big-title items-start place-content-start">
      <div class="" v-for="(item, index) in workItem" :key="index">
        <div class="big-title text-center">
          View some of my
          <router-link
            class="py-20 big-title capitalize decoration-slate-900 hover:text-slate-900 cursor-pointer"
            :to="{ name: item.name }"
          >
            <i :class="item.icon"></i> {{ item.title }}</router-link
          >
        </div>
      </div>
    </div>

    <div v-if="false" class="py-10 bg-red-500">Carousel of work</div>
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
  //clip-path: circle(85px at center);
  clip-path: circle(42% at 50% 50%);
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
