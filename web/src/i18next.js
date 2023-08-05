import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import chainedBackend from 'i18next-chained-backend';
import localStorageBackend from 'i18next-localstorage-backend';

i18n.use(languageDetector)
    .use(chainedBackend)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['navigator'],
        },
        fallbackLng: 'en',
        load: 'languageOnly',
        backend: {
            backends: [localStorageBackend, HttpApi],
            backendOptions: [
                {
                    prefix: 'i18nextLng_',
                    expirationTime: 1000 * 60 * 5,
                },
                {
                    loadPath: './locales/{{lng}}/{{ns}}.json',
                },
            ],
        },
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        returnNull: false,
        returnEmptyString: false,
        react: {
            wait: false,
            useSuspense: false,
        },
    });

export default i18n;
