<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted, computed } from "vue";
const store = useStore();
const state = store.state;

watch(state, (newVal) => {
  if (window.innerWidth >= 480) {
    // console.log("無視")
    return;
  }

  const quiz = document.querySelector(".quiz");
  const width = quiz.clientWidth;
  const len = newVal.currentPref.length;
  // console.log(newVal);
  // console.log("幅は" + width);
  // console.log("フォントは" + fontSize);
  // console.log("文字数は" + len);

  let NewFontSize = Math.floor(width / len);
  if (len < 4) {
    NewFontSize = NewFontSize * 0.7;
  } else {
    NewFontSize = NewFontSize * 0.9;
  }

  quiz.style.fontSize = `${NewFontSize}px`;
});
</script>

<template>
  <div class="quiz">
    {{ store.state.currentPref }}
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;

.quiz {
  border: 1px solid $cBorderColoer;
  border-radius: 10px;
  width: 80%;
  @extend .maxWidth;

  @extend .font-lg;
  height: 150px;
  line-height: 60px;
  font-weight: 600;
  margin: 0 auto;
  @extend .mb-md;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $cAnswerArea;

  white-space: nowrap; /* テキストの折り返しを禁止 */
  overflow-x: hidden; /* テキストの水平方向のオーバーフローを非表示 */
}
</style>
