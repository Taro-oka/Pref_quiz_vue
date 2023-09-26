<script setup>
import { useStore } from "vuex";
import { prefs } from "../../balace-sheet/prefBalaceSheet";


const store = useStore();
const state = store.state;

const addAns = (value) => {
  state.selectedAnswer = value;
  // console.log(state.selectedAnswer);
  store.dispatch("commitGetSomeSelected");
};
</script>

<template>
  <form class="form">
    <div v-for="pref in prefs">
      <label>
        <input
          type="radio"
          name="pref"
          :value="pref.val"
          :key="pref.name"
          :disabled="!state.isConfirm"
          @change="addAns(pref.val)"
          v-model="state.isChecked"
        />{{ pref.name }}
      </label>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;
.form {
  @extend .mb-md;
  width: 100%;
  @extend .maxWidth;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & div {
    width: fit-content;
    margin-bottom: 5px;
    flex-basis: 45%;
    text-align: center;
    font-size: 1.5em;
    position: relative;

    & > label {
      cursor: pointer;
      & > input[type="radio"] {
        cursor: pointer;
        width: 0.8em;
        height: 0.8em;
        margin-right: 5px;

        @include mq(sm) {
          left: 4em;
        }
      }

      &.disabled {
        color: #9e9e9e;
        cursor: default;
      }
    }
  }
}
</style>
