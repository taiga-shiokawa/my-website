import { NextIntlClientProvider } from 'next-intl';

// 有効な言語のリスト
const locales = ['en', 'ja'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // ロケールパラメータを取得
  const localeParam = params.locale;
  // 有効なロケールかチェック
  const validLocale = locales.includes(localeParam) ? localeParam : 'ja';
  
  // メッセージを読み込む
  let messages;
  try {
    messages = (await import(`../../../../messages/${validLocale}.json`)).default;
  } catch (error) {
    console.error(error);
    messages = (await import(`../../../../messages/ja.json`)).default;
  }

  // html/bodyタグを使わない
  return (
    <NextIntlClientProvider locale={validLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}