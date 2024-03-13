import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './domain/product/product.module';
import { ProductModule } from './application/product/product.module';
import { ProductModule } from './infrastructure/product/product.module';
import { ProductController } from './presentation/product/product.controller';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
