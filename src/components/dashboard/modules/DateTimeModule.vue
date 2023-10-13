<template>
  <BaseModule
    :position="props.position"
    :width="props.width"
    :height="props.height"
  >
    <h1>{{ output }}</h1>
  </BaseModule>
</template>

<script setup lang="ts">
import BaseModule from "./BaseModule.vue";
import {
  ModulePosition,
  ModuleProps,
} from "@/components/dashboard/modules/moduleProps";

// eslint-disable-next-line no-undef
const props = defineProps<ModuleProps>();

let output = "";

function setCurrentOutput(): void {
  const date = new Date();
  output = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  const secsToWait = 60 - date.getSeconds();
  setTimeout(() => setCurrentOutput(), secsToWait * 1000);
}

setCurrentOutput();
</script>

<style scoped></style>
