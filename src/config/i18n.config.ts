import { I18nOptions, AcceptLanguageResolver, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

export const I18nConfig: I18nOptions = {
  fallbackLanguage: 'en',
  loaderOptions: {
    path: path.join(__dirname, '../i18n/'),
    watch: true,
  },
  resolvers: [
    { use: QueryResolver, options: ['lang'] },
    AcceptLanguageResolver,
  ],
};
