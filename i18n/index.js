import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from './uz.json';
import ru from './ru.json';
import en from './en.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  uz: {
    translation: uz,
  }
};

i18n.use(initReactI18next).init({
  lng: 'en',
  resources
})

export default i18n;