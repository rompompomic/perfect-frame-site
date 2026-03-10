import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lv from "../locales/lv.json";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const resources = {
  lv: {
    translation: lv,
  },
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "lv",
  fallbackLng: "lv",

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
