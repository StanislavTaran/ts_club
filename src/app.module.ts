import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
import { LoggerMiddleware } from '../middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, MemberController],
  providers: [MemberService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
