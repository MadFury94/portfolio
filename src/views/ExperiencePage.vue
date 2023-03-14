<template>
  <div>
    <div class="grid xl:grid-cols-3 regular-text lg:px-10 py-20">
      <div>
        <h1 class="text-3xl text-indigo-500 font-semibold">
          My Web Developer Work
        </h1>
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
    <div>
      <h1 class="text-3xl text-indigo-500 font-semibold">My Writing Work</h1>
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
              <div class="tab" v-for="(item, index) in writing" :key="index">
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
      "Developed websites from front to backend using Vue js, Node js, and Mongodb. ",
      "Built responsive websites using HTML, CSS, JavaScript, WordPress, Magento, and modern front-end technologies such as VueJs from prototypes that I designed.",
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
  {
    company: "Simps Home",
    role: "Senior Web Developer",
    description: [
      "Developed a WordPress-based website for a real estate company",
      "Customized the appearance and functionality of the website using plugins and custom code.",
      "Added and organized content on the website, including information about properties for sale or rent, descriptions of the company and its services, and contact information.",
      "Implemented features specific to the real estate industry, such as property listings with search and filtering capabilities, and the ability to request appointments or showings.",
      "Conducted testing to ensure the website was functioning properly and was user-friendly for customers.",
    ],
  },
  {
    company: "Big Ben Fashion",
    role: "Senior WordPress Developer",
    description: [
      "Developed an e-commerce website for the online fashion retail company using WordPress.",
      "Customized the appearance and functionality of the website using plugins and custom code.",
      "Added and organized products and content on the website, including product descriptions, images, and pricing information.",
      "Conducted testing to ensure the website was functioning properly and was user-friendly for customers.",
    ],
  },
  {
    company: "SoundGang Record Label Website",
    role: "Senior WordPress Developer",
    description: [
      "Successfully designed and launched a new website for the music record label, improving its online presence and increasing user engagement.",
      "Collaborated with the client to gather feedback and make necessary revisions, ensuring a high-quality final product.",
      "Implemented SEO best practices to improve the website's visibility and search engine rankings.",
      "Designed and implemented a custom WordPress theme that aligned with the music record label's brand identity and style.",
      "Created and managed the website's content, including artist profiles, tour dates, and album releases.",
    ],
  },
]);
const writing = ref([
  {
    company: "Naijagoat Magazine",
    role: "Article Writer / Blogger",
    description: [
      "Developed and executed a content strategy to attract and engage target audiences, with a focus on creating content that was both informative and entertaining",
      "Researched and identified trending topics in various industries to inform content creation.",
      "Generated ideas and executed content that went viral, resulting in increased social media shares and engagement",
      "Utilized SEO techniques to optimize content for search engines, resulting in improved search engine rankings and increased organic traffic to the website ",
    ],
  },
  {
    company: "Deltabreed Magazine",
    role: "Content Writer / Blogger",
    description: [
      "Researching and writing high-quality, informative, and engaging articles on a range of topics, such as technology, entertainment,lifestyle, and current events",
      "Pitching ideas for new articles and working with the editorial team to develop a content strategy",
      "Editing and proofreading articles to ensure accuracy and readability",
      "Developing a new column focused on emerging technologies that became a regular feature on the website and attracted a dedicated readership.",
    ],
  },
  {
    company: "Wildstream Music",
    role: "Product Designer / Content Manager ",
    description: [
      "Performed ideation, sketching and wireframing.",
      "As a Social Media and Online Engagements Specialist at Wildstream, I was responsible for managing and growing our presence across all social media platforms. This included creating and scheduling engaging content, responding to user inquiries and feedback, and analyzing metrics to identify trends and areas for improvement. I was also involved in managing customer inquiries and feedback, and working with the product and development teams to address any issues that arose. During my tenure, I was able to drive significant engagement and growth across all social media channels, helping to establish Wildstream as a leader in the music streaming industry.",
      "Assessed UX and UI design for technical feasibility and usability",
      "My excellent communication and problem-solving skills, passion for music, and dedication to providing top-notch customer service were key assets to the Wildstream team.",
    ],
  },
]);
</script>

<style lang="scss"></style>
