import databaseConfig from './database.config';
import { I18nConfig } from './i18n.config';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: databaseConfig(),
  i18n: I18nConfig
});
