<script setup lang="ts">
import AllBanner from './components/AllBanner.vue';
</script>

<template>
  <AllBanner />
  <router-view />
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
