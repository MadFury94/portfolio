<template>
  <div class="flex justify-center h-screen">
    <main class="flex flex-col lg:flex-row items-center justify-center">
      <div class="lg:w-[600px] regular-text pt-10">
        <p>
          Hello!! My name is Brian and I enjoy creating useful things for the
          internet. My interest in web development started back in 2015 when I
          decided to make a website using Adobe Muse — i felt very limited and
          constrained and ultimately that sparked my interest to learn more
          about Html, Css and Javascript.
        </p>
        <br />

        <p>
          Fast-forward to today, and I’ve had the privilege of working at a web
          development agencies , a start-up,and a huge music Streaming platform.
          <br />
          My main focus these days is building accessible, inclusive products
          and digital experiences as a freelancer.
        </p>
        <br />

        <ul class="flex gap-x-10">
          <li v-for="(item, index) in contacts" :key="index">
            <a :href="item.link"
              ><i :class="item.image"></i
              ><span class="underline pl-2"> {{ item.social }}</span></a
            >
          </li>
        </ul>
        <br />
        <div>
          <ButtonComponent
            @click="downloadResume"
            title="Download Resume"
            icon="fal fa-cloud-download"
          />
        </div>
      </div>
      <ProfileImage />
    </main>
  </div>
</template>
<script setup lang="ts">
import ProfileImage from "../components/ProfileImage.vue";
import ButtonComponent from "@/views/ButtonComponent.vue";

const contacts = [
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/azukaeme-brian-4329b0246/",
    image: "fab fa-linkedin",
  },

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
