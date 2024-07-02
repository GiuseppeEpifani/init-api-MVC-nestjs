import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  // Disable the 'X-Powered-By' header
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors: ValidationError[]) => {
        logger.error(errors.map((error: ValidationError) => {
          return {
            property: error.property,
            constraints: error.constraints
          };
        }));

        return new BadRequestException({
          message: 'Bad Request',
          statusCode: 400
        });
      }
    })
  );

  await app.listen(process.env.PORT);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();