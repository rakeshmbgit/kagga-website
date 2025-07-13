import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'kn'] as const;

export default getRequestConfig(async ({locale}) => {
  // If locale is undefined, use default locale
  const currentLocale = locale || 'en';
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(currentLocale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../messages/${currentLocale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${currentLocale}`, error);
    notFound();
  }

  return {
    locale: currentLocale as string,
    messages
  };
}); 