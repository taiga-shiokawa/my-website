// i18n.ts
import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => {
  // ロケールが未定義の場合はデフォルトを設定
  const safeLocale = locale || 'ja';
  
  let messages;
  try {
    messages = (await import(`./messages/${safeLocale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for ${safeLocale}`, error);
    messages = (await import('./messages/ja.json')).default;
  }
  
  return {
    locale: safeLocale,  // localeを明示的に返す
    messages: messages
  };
});