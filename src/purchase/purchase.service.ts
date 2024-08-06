// src/purchase/purchase.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from 'src/models/purchase.entity';

@Injectable()
export class PurchaseService {
  private purchases = [];

  create(createPurchaseDto: CreatePurchaseDto) {
    this.purchases.push(createPurchaseDto);
    return 'Purchase recorded successfully';
  }

  findAll() {
    return this.purchases;
  }

  findByGuest(guestEmail: string) {
    return this.purchases.filter(
      (purchase) => purchase.guestEmail === guestEmail,
    );
  }
}
