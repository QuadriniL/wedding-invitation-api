// src/guest/guest.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuestDto } from 'src/models/guest.entity';

@Controller('guests')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestService.create(createGuestDto);
  }

  @Get()
  findAll() {
    return this.guestService.findAll();
  }

  @Post(':email/confirm')
  confirm(@Param('email') email: string) {
    return this.guestService.confirmGuest(email);
  }
}
