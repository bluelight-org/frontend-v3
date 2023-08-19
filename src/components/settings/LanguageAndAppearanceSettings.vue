<template>
  <div class="container">
    <h3>{{ $t("headline.languageAndAppearance") }}</h3>
    <div class="row g-3">
      <!-- Language -->
      <div class="col-md-6">{{ $t("settings.language") }}</div>
      <div class="col-md-6">
        <select class="form-select" v-model="$i18n.locale">
          <option
            v-for="choice in languageChoices"
            v-bind:value="choice"
            :key="choice"
          >
            {{ $t(`settings.languageChoices.${choice}`) }}
          </option>
        </select>
      </div>
      <!-- Color Theme -->
      <div class="col-md-6">{{ $t("settings.theme") }}</div>
      <div class="col-md-6">
        <select class="form-select" v-model="theme">
          <option
            v-for="choice in themeChoices"
            v-bind:value="choice"
            :key="choice"
          >
            {{ $t(`settings.themeChoices.${choice}`) }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const languageChoices = ["de", "en"];
const themeChoices = ["light-theme", "dark-theme"];

const store = useStore();

const theme = computed({
  get() {
    return store.state.colorTheme;
  },
  set(value) {
    store.commit("updateTheme", value);
  },
});
</script>
