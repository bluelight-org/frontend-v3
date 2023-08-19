<template>
  <div class="container">
    <h1>{{ $t("headline.settings") }}</h1>
    <div class="row">
      <div class="col-md-3">
        <SettingSidebar
          v-bind:tabs="tabs"
          v-bind:active="active"
          v-bind:set-active="(a) => (active = a)"
        />
      </div>
      <div class="col-md-9">
        <LanguageAndAppearanceSettings
          v-if="active === 'languageAndAppearance'"
          v-bind:language="language"
        />
        <ProfileSettings v-if="active === 'profileSettings'" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SettingSidebar from "@/components/settings/SettingSidebar.vue";
import { ref } from "vue";
import LanguageAndAppearanceSettings from "@/components/settings/LanguageAndAppearanceSettings.vue";
import ProfileSettings from "@/components/settings/ProfileSettings.vue";

const tabs = ["languageAndAppearance", "profileSettings"];
const active = ref<string>(tabs[0]);
</script>
