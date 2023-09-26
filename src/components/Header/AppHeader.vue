<template>
  <header class="header">
    <ul class="ul">
      <li>
        <router-link :to="{ path: '/' }">HOME</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/about' }">ABOUT</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../../styles/globals" as *;
@use "../../styles/parts/commons" as *;
.header {
  width: 100%;
  height: $headerHeight;
  background-color: rgba(255, 150, 150, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: $cBlack;
        font-size: 22px;
      }
    }
  }
}
</style>
