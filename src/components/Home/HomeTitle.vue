<script setup>
import { useStore } from "vuex";
const store = useStore();
const state = store.state;
</script>

<template>
  <div class="question_cnt">
    {{ state.currentNum + 1 }} / {{ state.prefData.length }}問中
  </div>
  <h1>表示される場所のある都道府県を選んでね</h1>
</template>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;

.question_cnt {
  @extend .mb-sm;
  @extend .font-sm;
  font-weight: 600;
}

h1 {
  @extend .mb-md;
  @extend .font-sm;
  text-align: center;
}
</style>
