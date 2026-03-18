import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'it'];

export default getRequestConfig(async (params) => {
  const requestLocale = await (params as any).requestLocale;
  const locale = (params as any).locale || requestLocale || 'it';
  
  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
