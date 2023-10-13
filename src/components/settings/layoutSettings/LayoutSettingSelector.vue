<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label>Type lol</label>
        <select class="form-select" v-model="moduleType">
          <option
            v-for="choice in moduleTypes"
            v-bind:value="choice"
            :key="choice"
          >
            {{ choice }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Höhe lol</label>
        <input type="number" v-model="height" class="form-control" />
      </div>
      <div class="form-group">
        <label>breite lol</label>
        <input type="number" v-model="width" class="form-control" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModulePosition } from "@/components/dashboard/modules/moduleProps";
import { useStore } from "vuex";
import { computed } from "vue";
import { LayoutConfig, ModuleType } from "@/components/dashboard/layoutConfig";

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps<{ position: ModulePosition }>();

const moduleTypes = [null, ...Object.keys(ModuleType)];

const layoutConfig = computed({
  get() {
    const val: LayoutConfig[] = (
      store.state.dashboardModuleLayout as LayoutConfig[]
    ).filter((v: LayoutConfig) => v.position === props.position);
    if (val.length > 0) return val[0];
    return {
      type: null,
      position: props.position,
      width: 20,
      height: 20,
    };
  },
  set(value: LayoutConfig) {
    const vals: LayoutConfig[] = (
      store.state.dashboardModuleLayout as LayoutConfig[]
    ).filter((v: LayoutConfig) => v.position !== props.position);
    store.commit(
      "updateDashboardLayout",
      value.type === null ? vals : [...vals, value]
    );
  },
});

const moduleType = computed({
  get() {
    return layoutConfig.value.type;
  },
  set(value) {
    layoutConfig.value = { ...layoutConfig.value, type: value };
  },
});

const width = computed({
  get() {
    return layoutConfig.value.width;
  },
  set(value) {
    layoutConfig.value = { ...layoutConfig.value, width: value };
  },
});

const height = computed({
  get() {
    return layoutConfig.value.height;
  },
  set(value) {
    layoutConfig.value = { ...layoutConfig.value, height: value };
  },
});
</script>

<style scoped></style>
