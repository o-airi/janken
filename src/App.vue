<script setup lang="ts">
import * as tmImage from "@teachablemachine/image";
import { computed } from "@vue/reactivity";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import osako from "./components/osako.vue";
import { useHandClassification } from "./useHandClassification";
import { useRandomHand } from "./useRandomHand";

// const contents = [
//   { title: "生活", price: "20000" },
//   { title: "食費", price: "30000" },
//   { title: "勉強", price: "15000" },
//   { title: "娯楽", price: "45000" },
//   { title: "総額", price: "480000" },
//   { title: "趣味", price: "38000" },
//   { title: "美容", price: "22000" },
//   { title: "旅行", price: "10000" },
//   { title: "将来", price: "300000" },
// ];

// const log = console.log;
const {
  canvas,
  hands,
  highestHand: myHand,
} = useHandClassification("-OK3qi8d1");
const { hand: enemyHand } = useRandomHand();
const youWin = computed(
  () =>
    (myHand.value.name === "グー" && enemyHand.value === "チョキ") ||
    (myHand.value.name === "チョキ" && enemyHand.value === "パー") ||
    (myHand.value.name === "パー" && enemyHand.value === "グー")
);
</script>

<template>
  <!-- <osako @click="init()">Start</osako> -->
  <canvas ref="canvas" class="rounded-md"></canvas>
  <div>{{ hands }}</div>
  <div>今表示されているのは、{{ myHand.name }}です。</div>
  <canvas ref="canvas"></canvas>
  {{ enemyHand }}
  <div v-if="youWin">勝ち</div>
  <div v-else>負け</div>
  <!-- <div class="container bg-gray-900">
    <div class="grid md:grid-cols-3 grid-cols-3 justify-items-center p-20">
      <osako
        v-for="index in contents"
        :key="index.title"
        class="m-4"
        @lazy-click="log"
        @lazy="log('lazy実行')"
      >
        <div
          class="
            font-bold
            text-yellow-50 text-3xl
            transform
            motion-safe:hover:scale-110
          "
        >
          {{ index.title }}
        </div>
      </osako>
    </div>
  </div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
