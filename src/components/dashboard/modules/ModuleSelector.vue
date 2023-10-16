<template>
  <DateTimeModule
    v-if="props.type === ModuleType.dateTime"
    :width="props.width"
    :position="props.position"
    :height="props.height"
  />
</template>

<script setup lang="ts">
import DateTimeModule from "@/components/dashboard/modules/DateTimeModule.vue";
import { LayoutConfig, ModuleType } from "@/components/dashboard/layoutConfig";

// eslint-disable-next-line no-undef
const props = defineProps<LayoutConfig>();
</script>
