<template>
  <div class="container">
    <h3>{{ $t("headline.dashboardLayout") }}</h3>
    <div class="row">
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.topLeft" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.top" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.topRight" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.middleLeft" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.middle" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.middleRight" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.bottomLeft" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.bottom" />
      </div>
      <div class="col-md-4">
        <LayoutSettingSelector :position="ModulePosition.bottomRight" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutSettingSelector from "@/components/settings/layoutSettings/LayoutSettingSelector.vue";
import { ModulePosition } from "@/components/dashboard/modules/moduleProps";
</script>
