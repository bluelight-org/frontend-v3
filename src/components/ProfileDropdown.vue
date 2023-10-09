<template>
  <div class="dropdown profile-select">
    <img
      src="default-pp.png"
      alt="profile picture"
      class="dropdown-toggle"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    />

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li v-for="item in dropdownItems" class="dropdown-item" :key="item.name">
        <router-link v-bind:to="item.route" class="disable-decoration">
          {{ $t(`routes.${item.name}`) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const dropdownItems = [{ name: "settings", route: "/settings" }];
</script>

<style scoped>
.profile-select {
  align-self: flex-end;
}
.profile-select img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: white;
}
.dropdown-menu {
  transform: translate(-75%, 0px);
  background-color: var(--dropdownColor);
}
.dropdown-item {
  color: var(--textColor);
}
.dropdown-item:hover {
  background: var(--dropdownElementColor);
}
.disable-decoration {
  text-decoration: none;
  color: var(--textColor);
}
</style>
