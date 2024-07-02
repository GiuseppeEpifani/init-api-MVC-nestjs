import { Module } from '@nestjs/common';
import { UserModule, UserService } from './features/user';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { I18nModule } from 'nestjs-i18n';
import { I18nConfig } from './config/i18n.config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    I18nModule.forRoot(I18nConfig),
    DatabaseModule
  ],
  controllers: [],
  providers: [
    UserService
  ]
})
export class AppModule {}
