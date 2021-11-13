<script setup lang="ts">
import { ref, computed, defineProps } from "vue";

defineProps<{ msg: string }>();

const count = ref(0); //ref=参照型 {value:0}

//課題：countが100になるまで残りいくつかを表示する
const max = 100;
const residue = computed(() => max - count.value);

//偶数だったらtrue、奇数だったらfalse
// let even = true;
// if(count.value%2 == 0){
//   even = true;
// }else{
//   even = false;
// }

const evenorodd = computed(() => count.value % 2 === 0);

// const a = 1;
// const b = 2;
const add = computed(() => count.value + 1);

const increment = () => count.value++; //
setInterval(increment, 1000); //定期実行
console.log("evenorodd");

const text = ref("aaaa");
const twicetext = computed(() => text.value.repeat(2)); //仮想の値を生み出すもの

const strlength = computed(() => text.value.length % 2 === 0);
// const index = ([1,2,3] as const)[1]
// 'bbbbb'.length
</script>

<template>
  <h1 class="bg-red-400">{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <div>{{ add }}</div>
  <div>偶数ならtrue、奇数ならfalse：{{ evenorodd }}</div>
  <div>100まで残り{{ residue }}</div>
  {{ text }}
  <input v-model="text" type="text" />
  <div>この文字の桁数が偶数ならtrue、奇数ならfalse：【{{ strlength }}】</div>
  <div>{{ twicetext }}</div>
</template>
