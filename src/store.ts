import { createStore } from "vuex";
import { LayoutConfig } from "@/components/dashboard/layoutConfig";

const decodeDashboardLayout = (): LayoutConfig[] => {
  const data = window.localStorage.getItem("dashboard-module-config");
  if (data === null || data === "") {
    return [];
  }
  return JSON.parse(data)["config"];
};

export default createStore({
  state: {
    colorTheme: window.localStorage.getItem("color-theme") ?? "light-theme",
    dashboardModuleLayout: decodeDashboardLayout(),
  },
  getters: {},
  mutations: {
    updateTheme: (state, theme) => {
      state.colorTheme = theme;
      window.localStorage.setItem("color-theme", theme);
      document.documentElement.className = theme;
    },
    updateDashboardLayout: (state, layout) => {
      state.dashboardModuleLayout = layout;
      /*window.localStorage.setItem(
        "dashboard-module-config",
        JSON.stringify({ config: layout })
      );*/
    },
  },
  actions: {},
  modules: {},
});
