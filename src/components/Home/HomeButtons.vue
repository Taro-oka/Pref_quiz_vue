<script setup>
import { useStore } from "vuex";
const store = useStore();
const state = store.state;

const gotoNext = () => {
  store.dispatch("commitGotoNext");
  store.dispatch("commitGetUnchecked");
  store.dispatch("commitGetNoneSelected");
};

const confirmAnswer = () => {
  if (!state.isAnySelected && state.currentNum >= 0) {
    alert("選択して下さい");
    return;
  }
  store.dispatch("commitConfirmAnswer");
  if (state.currentNum >= state.prefData.length - 1) {
    store.dispatch("commitGetSore");
    store.dispatch("commitGetMessage");
    store.dispatch("commitShowResult");
  }
};
</script>

<template>
  <div class="buttons">
    <button class="btn refresh" @click="gotoNext" :disabled="!state.isNext">
      {{ state.currentNum >= 0 ? "次へ" : "開始" }}
    </button>
    <button class="btn go" @click="confirmAnswer" :disabled="!state.isConfirm">
      {{ state.currentNum >= state.prefData.length - 1 ? "結果" : "確定" }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;

.buttons {
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @include mq(sm) {
    margin: 0 auto 20px auto;
  }

  & .btn {
    @extend .font-sm;
    width: 100px;
    height: 50px;
    display: block;
    border: 1px solid $cBorderColoer;
    cursor: pointer;
    background-color: $cBtn;
    transition: all 0.2s;
    margin-right: 30px;
    color: $cBorderColoer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: $cBorderColoer;
      color: $cWhite;
    }

    &:disabled {
      background-color: $cBtn;
      color: #9e9e9e;
      cursor: default;
      border: none;
    }
  }
}
</style>
