import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// استيراد ملفات الترجمة
import translationEN from '../../locales/en/translation.json';
import translationAR from '../../locales/ar/translation.json';

i18n
  .use(initReactI18next) // التكامل مع React
  .init({
    resources: {
      en: {
        translation: translationEN, // تحميل الترجمة الإنجليزية
      },
      ar: {
        translation: translationAR, // تحميل الترجمة العربية
      },
    },
    lng: 'en',
    fallbackLng: 'en', // اللغة الافتراضية
    debug: true, // لتسهيل اكتشاف الأخطاء
    interpolation: {
      escapeValue: false, // مطلوب لـ React
    },
  });

export default i18n;
