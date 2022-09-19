import { defineStore } from "pinia";

export const appMenuStore = defineStore({
  id: "appMenu",
  state: () => ({
    isOpen: true,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
