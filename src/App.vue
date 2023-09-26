<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/Header/AppHeader.vue";
import { getData } from "./mounted/getData";
import { useStore } from "vuex";

const store = useStore();
const data = ref([]);

onMounted(async () => {
  data.value = await getData("pref");
  store.dispatch("commitSetPrefData", { data: data });
});
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
