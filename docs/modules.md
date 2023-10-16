# How to add new dashboard modules

If you want to build your own dashboard module you will have
to follow this small tutorial.

**Step 1:** <br>
Use this template for a new module.

```vue
<template>
  <BaseModule
    :position="props.position"
    :width="props.width"
    :height="props.height"
  >
    <!-- your code here -->
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

/* your code here */
</script>
```

**Step 2:**

You need to add your module type in the `layoutConfig.ts` file.

```ts
export enum ModuleType {
  dateTime = "dateTime",
  yourType = "yourType"  
}
```

**Step 3:**
Add translation for type in the translation files.
```json
{
  "moduleTypes": {
    "null": "Empty",
    "dateTime": "Datetime",
    "yourType": "yourType"
  }
}
```

**Step 4:**
Add your module in `ModuleSelector.vue`
```vue
<YourModule
    v-if="props.type === ModuleType.yourType"
    :width="props.width"
    :position="props.position"
    :height="props.height"
/>
```
