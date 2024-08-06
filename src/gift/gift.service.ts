// src/gift/gift.service.ts
import { Injectable } from '@nestjs/common';
import { CreateGiftDto } from 'src/models/gift.entity';

@Injectable()
export class GiftService {
  private gifts = [];

  create(createGiftDto: CreateGiftDto) {
    this.gifts.push(createGiftDto);
    return 'Gift added successfully';
  }

  findAll() {
    return this.gifts;
  }

  findByCategory(categoryId: number) {
    return this.gifts.filter((gift) => gift.categoryId === categoryId);
  }
}
