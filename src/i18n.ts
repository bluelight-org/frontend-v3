import { createI18n } from "vue-i18n";

// import translations
import de from "./locales/de.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  locale: "de",
  fallbackLocale: "en",
  messages: { de, en },
});

export default i18n;
