<template>
  <div :style="getPosition() + getDimensions()" class="module-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  ModulePosition,
  ModuleProps,
} from "@/components/dashboard/modules/moduleProps";

// eslint-disable-next-line no-undef
const props = defineProps<ModuleProps>();

const getPosition = () => {
  switch (props?.position) {
    case ModulePosition.topLeft:
      return `position: absolute; top: 0%; left: 0%;`;
    case ModulePosition.top:
      return `position: absolute; top: 0%; left: 50%; transform: translateX(-50%);`;
    case ModulePosition.topRight:
      return `position: absolute; top: 0%; left: ${100 - props.width}%;`;
    case ModulePosition.middleLeft:
      return `position: absolute; top: 50%; left: 0%; transform: translateY(-50%);`;
    case ModulePosition.middle:
      return "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
    case ModulePosition.middleRight:
      return `position: absolute; top: 50%; left: ${
        100 - props.width
      }%; transform: translateY(-50%);`;
    case ModulePosition.bottomLeft:
      return `position: absolute; top: ${100 - props.height}%; left: 0%;`;
    case ModulePosition.bottom:
      return `position: absolute; top: ${
        100 - props.height
      }%; left: 50%; transform: translateX(-50%);`;
    case ModulePosition.bottomRight:
      return `position: absolute; top: ${100 - props.height}%; left: ${
        100 - props.width
      }%;`;
  }
};

const getDimensions = () => {
  return `width: ${props.width}%; height: ${props.height}%;`;
};
</script>

<style scoped>
.module-container {
  background: var(--moduleBoxBackground);
  padding: 20px;
  border: 3px solid var(--moduleBoxBorder);
  border-radius: 10px;
  color: var(--textColor);
  box-shadow: 5px 5px 5px var(--moduleBoxShadow);
}
</style>
