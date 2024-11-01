// TranslationService.js
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {
      q: text,
      target: targetLanguage,
      key: API_KEY,
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
  }
};
