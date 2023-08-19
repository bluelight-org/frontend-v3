<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="#">
        <img src="/logo.png" alt="" width="40" height="40" class="img-radius" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="item of navbarItems"
            v-bind:key="item.name"
            :class="['nav-item', active === item.path ? 'active' : '']"
          >
            <router-link class="nav-link" v-bind:to="item.path">
              {{ $t(`routes.${item.name}`) }}
            </router-link>
          </li>
        </ul>
        <ProfileDropdown />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { routes } from "@/router";
import { computed } from "vue";
import ProfileDropdown from "@/components/ProfileDropdown.vue";

const active = computed(() => {
  return window.location.pathname;
});
const navbarItems = routes.filter((route) => route?.meta?.showInMenu);
</script>

<style scoped>
.img-radius {
  border-radius: 5px;
}
.nav-link {
  cursor: pointer;
}
.navbar {
  background-color: var(--navbarColor);
}
</style>
