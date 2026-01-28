import { I18n } from "i18n-js";
import en from "../locales/en";
import hi from "../locales/hi";
import te from "../locales/te";

const i18n = new I18n({
  en,
  hi,
  te,
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";

i18n.locale = "en";
i18n.locale = "hi";
i18n.locale = "te";

export default i18n;
