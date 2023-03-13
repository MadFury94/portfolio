<template>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-900 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  >
    <i :class="icon" class="pr-2"></i>
    {{ title }}
  </button>
</template>
<script lang="ts">
export default {
  name: "ButtonComponent",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
