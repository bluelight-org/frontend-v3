import { createStore } from "vuex";

export default createStore({
  state: {
    colorTheme: window.localStorage.getItem("color-theme") ?? "light-theme",
  },
  getters: {},
  mutations: {
    updateTheme: (state, theme) => {
      state.colorTheme = theme;
      window.localStorage.setItem("color-theme", theme);
      document.documentElement.className = theme;
    },
  },
  actions: {},
  modules: {},
});
