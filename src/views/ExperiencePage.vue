<template>
  <div>
    <div class="grid xl:grid-cols-3 regular-text lg:px-10 py-20">
      <div>
        <h1 class="title">My Work Experience</h1>
      </div>
      <div class="col-span-2 lg:p-2">
        <div class="lg:flex">
          <div class="hidden lg:inline space-y-2">
            <div class="h-[400px] border-l border-l-green-300 px-4"></div>
            <div class="h-[100px] border-l border-l-green-300 px-4"></div>
          </div>
          <div class="space-y-4">
            <div class="">
              <div class="">
                <div
                  class="tab"
                  v-for="(item, index) in experiences"
                  :key="index"
                >
                  <h1 class="text-xl font-medium">
                    {{ item.role }}
                  </h1>
                  <h1 class="text-slate-900 dark:text-slate-900 font-medium">
                    {{ item.company }}
                  </h1>
                  <div class="pt-2">
                    <ul class="space-y-2">
                      <li
                        v-for="(item, index) in item.description"
                        :key="index"
                        class=""
                      >
                        <div class="flex gap-x-2">
                          <i class="fal fa-caret-right"></i>
                          <p>{{ item }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const experiences = ref([
  {
    company: "Katalyst Technologies",
    role: "Lead Front End Developer",
    description: [
      "Conceptualized and designed WebApps prototypes using UX/UI frameworks such as Figma, Pen Pots, and Adobe Illustrator. ",
      "Contributed to MobileApp Development, resulting in a 29% increase in e-commerce sales.",
      "Trained over 50 staff members on inner website functions.",
      "Developed websites from front to backend using Vue js, Node js, and Mongodb.",
      "Built responsive websites using HTML, CSS, JavaScript, WordPress, Magento, and modern front-end technologies such as VueJs from prototypes that I designed.",
    ],
  },

  {
    company: "Wildstream Music",
    role: "Product Designer",
    description: [
      "Performed ideation, sketching and wireframing.",
      "As a Social Media and Online Engagements Specialist at Wildstream, I was responsible for managing and growing our presence across all social media platforms. This included creating and scheduling engaging content, responding to user inquiries and feedback, and analyzing metrics to identify trends and areas for improvement. I was also involved in managing customer inquiries and feedback, and working with the product and development teams to address any issues that arose. During my tenure, I was able to drive significant engagement and growth across all social media channels, helping to establish Wildstream as a leader in the music streaming industry.",
      "Assessed UX and UI design for technical feasibility and usability",
      "My excellent communication and problem-solving skills, passion for music, and dedication to providing top-notch customer service were key assets to the Wildstream team.",
    ],
  },
  {
    company: "SprynxMulti",
    role: "Lead designer",
    description: [
      "Implemented websites, mobile application, and landing pages from concept to development",
      "Standardized all output with a new, responsive, mobile-first approach and strategy",
      "Assessed UX and UI design for technical feasibility and usability",
      "collaborated with product team members to implement new featues development",
    ],
  },
  {
    company: "ANBE Nigeria",
    role: "Lead Web designer",
    description: [
      "Designed and implemented highly complex, dynamic websites using WordPress and Vue.js, incorporating advanced features such as e-commerce functionality and custom security protocols",
      "Analyzed user behavior and data analytics to optimize website performance and user experiencey",
      "Conducted in-depth testing and review of website designs to ensure optimal responsiveness, clarity, and effectiveness across all devices and platforms",
      "Mentored junior team members in website development best practices and technologies",
    ],
  },
]);
</script>

<style lang="scss"></style>
