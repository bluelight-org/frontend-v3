<template>
  <ul class="nav nav-pills g-1">
    <li
      v-for="tab in props.tabs"
      :key="tab"
      class="nav-item mt-1"
      @click="() => props.setActive(tab)"
    >
      <button
        :class="[
          'btn',
          props.active === tab ? 'btn-primary' : 'btn-light',
          'w-100',
        ]"
      >
        {{ $t(`headline.${tab}`) }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  active: string;
  tabs: string[];
  setActive: (active: string) => void;
}

const props = defineProps<Props>();
</script>

<style scoped>
.nav {
  flex-direction: column;
}
.disable-decoration {
  text-decoration: none;
  color: var(--textColor);
}
</style>
