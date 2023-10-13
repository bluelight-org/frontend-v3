<template>
  <div class="configured-container">
    <DateTimeModule
      :position="ModulePosition.topLeft"
      :width="20"
      :height="20"
    />
    <DateTimeModule :position="ModulePosition.top" :width="20" :height="20" />
    <DateTimeModule
      :position="ModulePosition.topRight"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.middleLeft"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.middle"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.middleRight"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.bottomLeft"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.bottom"
      :width="20"
      :height="20"
    />
    <DateTimeModule
      :position="ModulePosition.bottomRight"
      :width="20"
      :height="20"
    />-
  </div>
</template>

<script setup lang="ts">
import DateTimeModule from "@/components/dashboard/modules/DateTimeModule.vue";
import { ModulePosition } from "@/components/dashboard/modules/moduleProps";
</script>

<style scoped>
.configured-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
