import { ref } from "vue";

export const video = ref({
  color: "#1E293B",
  setColor(color: string) {
    this.color = color;
  },
});
