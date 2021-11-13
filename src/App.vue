<script setup lang="ts">
// import * as tmImage from "@teachablemachine/image";
import { computed } from "vue";
import ThePlayerHandCard from "./components/ThePlayerHandCard.vue";
import VCard from "./components/VCard.vue";
import { useHandClassification } from "./useHandClassification";
import { useRandomHand } from "./useRandomHand";

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
  <div class="container mx-auto">
    <div class="lg:grid grid-cols-4 hidden">
      <v-card v-for="hand in hands" :key="hand.name" class="flex-1 m-4">
        <div class="font-bold">{{ hand.name }}</div>
        <div>{{ (hand.score * 100).toFixed(0) }}%</div>
      </v-card>
    </div>
    <canvas ref="canvas" class="m-4 rounded-md flex-1"></canvas>
    <div class="flex">
      <the-player-hand-card
        :class="{
          'bg-blue-200': !youWin,
          'bg-red-300': youWin,
        }"
      >
        <template #player>あなた</template>
        {{ myHand.name }}
      </the-player-hand-card>
      <div class="font-bold flex flex-col justify-center">VS</div>
      <the-player-hand-card
        :class="{
          'bg-blue-200': youWin,
          'bg-red-300': !youWin,
        }"
      >
        <template #player>エネミー</template>
        {{ enemyHand }}
      </the-player-hand-card>
    </div>
  </div>
</template>

<!--<template>
   <osako @click="init()">Start</osako> 
  <canvas ref="canvas" class="rounded-md"></canvas>
  <div>{{ hands }}</div>
  <div>今表示されているのは、{{ myHand.name }}です。</div>
  <canvas ref="canvas"></canvas>
  {{ enemyHand }}
  <div v-if="youWin">勝ち</div>
  <div v-else>負け</div>
  <div class="container bg-gray-900">
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
  </div> 
</template> -->

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
