<template>
  <div class="configured-container">
    <ModuleSelector
      v-for="element in store.state.dashboardModuleLayout"
      v-bind:key="element.type"
      :width="element.width"
      :position="element.position"
      :type="element.type"
      :height="element.height"
      :extra-props="element.extraProps"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import ModuleSelector from "@/components/dashboard/modules/ModuleSelector.vue";

const store = useStore();
</script>

<style scoped>
.configured-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
