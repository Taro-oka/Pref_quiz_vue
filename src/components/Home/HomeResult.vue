<script setup>
import { useStore } from "vuex";
import { prefs } from "../../balace-sheet/prefBalaceSheet";
const store = useStore();
const state = store.state;

const closeResult = () => {
  store.dispatch("commitShowResult");
  window.location.reload();
};
</script>

<template>
  <!-- 結果（初期状態では非表示） -->
  <div :class="state.isResultShown ? 'result inview' : 'result'">
    <button class="close-btn" @click="closeResult">
      <span></span>
      <span></span>
    </button>
    <h2>結果</h2>
    <p>
      <span class="score">{{ `${state.score}` }}</span>
      <span>{{ ` / ${state.prefData.length} 問中` }}</span>
    </p>
    <p class="comment">{{ state.message }}</p>
    <table class="result__table">
      <tr>
        <th>都市名</th>
        <th>都道府県</th>
        <th>あなたの回答</th>
        <th>合否</th>
      </tr>
      <tr v-for="(item, index) in state.prefData">
        <td>{{ item.city }}</td>
        <td>{{ prefs.find((pref) => pref.val === item.pref).name }}</td>
        <td>
          {{
            item.yourAnswer
              ? prefs.find((pref) => pref.val === item.yourAnswer).name
              : ""
          }}
        </td>
        <td
          :style="{
            color: item.pref === item.yourAnswer ? 'blue' : 'red',
            'font-weight': 'bold',
          }"
        >
          {{ item.pref === item.yourAnswer ? "〇" : "×" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;

.result {
  width: 80%;
  max-width: 800px;
  height: 90%;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $cResultBackGround;
  transition: opacity 0.5s;
  border-radius: 25px;
  overflow-y: scroll;
  opacity: 0; /* 編集時ここを修正 */
  visibility: hidden; /* 編集時ここを修正 */
  z-index: -1; /* 編集時ここを修正 */

  & .close-btn {
    position: sticky;
    top: 5px;
    left: 100%;
    transform: translateX(-5px);
    width: 40px;
    height: 40px;
    border: $cBorderColoer solid 3px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;

    & span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: $cBorderColoer;
      position: absolute;
      top: calc(50% - 1.5px);
      transform-origin: center center;

      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }

    &:hover {
      & > span {
        border: 1px solid $cBorderColoer;
        transition: all 0.2s ease;
      }
    }
  }

  &__table {
    @extend .mb-sm;
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;
    & th,
    td {
      border: $cBorderColoer solid 1px;
      text-align: center;
    }
  }

  &.inview {
    opacity: 1;
    visibility: visible;
    z-index: 10;
  }

  & > h2 {
    @extend .font-md;
    width: fit-content;
    margin: 0 auto 30px auto;
    line-height: 2rem;
    border: 2px solid #6b6b6b;
    border-radius: 10px;
    padding: 15px;
  }

  & > p {
    @extend .font-md;
    width: fit-content;
    margin: 0 auto;
    font-weight: 600;

    &:nth-of-type(1) {
      @extend .mb-sm;
    }
    &:nth-of-type(2) {
      @extend .font-sm;
      @extend .mb-md;
      height: 1.5rem;
    }
  }

  & .score {
    color: red;
  }

  & .comment {
    color: red;
  }
}
</style>
