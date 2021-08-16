import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import ptTranslation from './pt/translation.json';

export const resources = {
    enUS: {
        translation: enTranslation,
    },
    ptBR: {
        translation: ptTranslation,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'ptBR',
    fallbackLng: 'enUS',
    resources,
});
