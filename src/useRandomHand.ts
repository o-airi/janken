import { ref, computed } from "@vue/runtime-core";
import { Hand } from "./useHandClassification"; //手が取りうるパターンの宣言

export const useRandomHand = () => {
  const hand = ref<Hand>("グー"); //グーを初期値とする
  const changeHand = () => {
    const randomHand = Math.floor(Math.random() * 3);
    if (randomHand === 0) {
      hand.value = "グー";
    } else if (randomHand === 1) {
      hand.value = "チョキ";
    } else if (randomHand === 2) {
      hand.value = "パー";
    }
  };
  setInterval(changeHand, 5000);

  return {
    hand,
  };
};
