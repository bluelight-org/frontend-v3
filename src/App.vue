<template>
  <NavBar />
  <router-view />
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";

const store = useStore();
document.documentElement.className = store.state.colorTheme;
</script>

<style lang="scss">
@import "assets/themes";
</style>
