// src/gift/gift.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GiftService } from './gift.service';
import { CreateGiftDto } from 'src/models/gift.entity';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post()
  create(@Body() createGiftDto: CreateGiftDto) {
    return this.giftService.create(createGiftDto);
  }

  @Get()
  findAll() {
    return this.giftService.findAll();
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: number) {
    return this.giftService.findByCategory(categoryId);
  }
}
