<script setup lang="ts">
// import { defineEmits } from "@vue/runtime-core";
// const emit = defineEmits<{
//   (event: "lazy"): void;
//   (event: "lazyClick", lazy: number): void;
// }>();
// setTimeout(() => emit("lazy"), 1000);
// // emit("lazyClick");
// const lazyClick = () => {
//   emit("lazyClick", 1000);
// };
</script>

<template>
  <button
    class="rounded-full h-40 w-40 flex items-center justify-center bg-blue-500"
  >
    <slot></slot>
  </button>
</template>
