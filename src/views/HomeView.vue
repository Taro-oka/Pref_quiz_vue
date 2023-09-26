<script setup>
import Title from "../components/Home/HomeTitle.vue";
import QuizArea from "../components/Home/HomeQuizArea.vue";
import Form from "../components/Home/HomeForm.vue";
import Buttons from "../components/Home/HomeButtons.vue";
import Result from "../components/Home/HomeResult.vue";
import { useStore } from "vuex";
const store = useStore();
const state = store.state;
</script>

<template>
  <div
    :class="
      state.isResultShown ? 'global-container inview' : 'global-container'
    "
  >
    <div class="container">
      <Title />
      <QuizArea />
      <Form />
      <Buttons />
    </div>
    <Result />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/globals" as *;
@use "../styles/parts/commons" as *;

* {
  @font-face {
    font-family: "Zen Maru Gothic";
    src: url(../styles/fonts/ZenMaruGothic-Regular.ttf);
    font-style: normal;
    font-display: swap;
  }
  font-family: "Zen Maru Gothic", sans-serif;
}
.global-container {
  background-color: $cBackGroundColor;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  position: relative;

  &.inview {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #33333357;
      z-index: 3;
    }
  }
}

.container {
  width: 95%;
  height: fit-content;
  margin: 0 auto;
  margin-top: $headerHeight;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @include mq(sm) {
    padding-top: 20px;
  }
}
</style>
