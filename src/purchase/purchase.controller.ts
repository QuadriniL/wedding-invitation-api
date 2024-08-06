// src/purchase/purchase.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from 'src/models/purchase.entity';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get('guest/:guestEmail')
  findByGuest(@Param('guestEmail') guestEmail: string) {
    return this.purchaseService.findByGuest(guestEmail);
  }
}
