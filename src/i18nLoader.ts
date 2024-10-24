import i18n from './i18n';

// Function to dynamically load language
export const loadLanguage = async (language: string) => {
  try {
    const { default: translation } = await import(`../public/locales/${language}/translation.json`);
    i18n.addResources(language, 'translation', translation);
    i18n.changeLanguage(language);
  } catch (error) {
    console.error(`Error loading language ${language}:`, error);
  }
};

// Load the default language (English) on app startup
export const loadDefaultLanguage = () => loadLanguage('en');
