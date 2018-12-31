import { Module, RequestMethod, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/lol')
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('cats');
      // .forRoutes({ path: '*', method: RequestMethod.ALL });
      .exclude(
        { path: 'lolkek', method: RequestMethod.GET },
        { path: 'lolkek2', method: RequestMethod.GET }
      )
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
