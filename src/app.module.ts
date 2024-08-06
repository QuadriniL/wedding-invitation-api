// src/app.module.ts
import { Module } from '@nestjs/common';
import { GuestModule } from './guest/guest.module';
import { GiftModule } from './gift/gift.module';
import { CategoryModule } from './category/category.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [GuestModule, GiftModule, CategoryModule, PurchaseModule],
})
export class AppModule {}
