<template>
  <div class="container">
    <div class="card align-content-center">
      <div class="card-body">
        <h1 class="card-title">{{ $t("routes.login") }}</h1>
        <input
          class="form-control"
          :placeholder="$t('common.username')"
          type="text"
          v-model="usernameValue"
        />
        <input
          class="form-control"
          :placeholder="$t('common.password')"
          type="password"
          v-model="passwordValue"
        />
        <div class="d-flex flex-column">
          <button
            class="btn btn-primary"
            v-on:click="login(usernameValue, passwordValue)"
          >
            {{ $t("routes.login") }}
          </button>
          <router-link to="/register">{{ $t("routes.register") }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from "vue";
import { ApiService } from "@/service/api/ApiService";
import { useNotification } from "@kyvg/vue3-notification";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const api = inject<ApiService>("apiService");
const { notify } = useNotification();
const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const usernameValue = ref<string>("");
const passwordValue = ref<string>("");

function login(username: string, password: string): void {
  api?.login(username, password).then((data) => {
    if (!data) {
      notify({
        title: t("message.loginFailed"),
        text: t("message.wrongCreds"),
        duration: 1000,
        type: "error",
      });
    } else {
      if (route.params.nextUrl) router.push(route.params.nextUrl as string);
      else router.push("/dashboard");
    }
  });
}
</script>

<style scoped>
.card {
  margin-top: 15%;
  background: var(--cardColor);
}
.card-body {
  background: var(--cardColor);
}
.card-title {
  text-align: center;
}
.form-control {
  height: 55px;
}
input {
  margin-top: 1em;
  font-size: 1.2em;
}
input::placeholder {
  text-align: center;
}
.btn {
  margin-top: 1em;
  padding: 13px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: var(--buttonColor);
  border-color: var(--buttonColor);
}
a {
  display: grid;
  place-items: center;
  margin-top: 10px;
}
.form-control {
  background: var(--inputColor);
  border-color: var(--inputBorderColor);
  color: var(--textColor);
}
</style>
