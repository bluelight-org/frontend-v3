<template>
  <NavBar />
  <router-view />
  <Notifications position="bottom right" />
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { provide } from "vue";
import { ApiService } from "@/service/api/ApiService";

const store = useStore();
document.documentElement.className = store.state.colorTheme;
provide("apiService", new ApiService());
</script>

<style lang="scss">
@import "assets/themes";
</style>
