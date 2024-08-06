// src/guest/guest.service.ts
import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from 'src/models/guest.entity';

@Injectable()
export class GuestService {
  private guests = [];

  create(createGuestDto: CreateGuestDto) {
    this.guests.push(createGuestDto);
    return 'Guest added successfully';
  }

  findAll() {
    return this.guests;
  }

  confirmGuest(email: string) {
    const guest = this.guests.find((g) => g.email === email);
    if (guest) {
      guest.confirmed = true;
      return 'Guest confirmed successfully';
    }
    return 'Guest not found';
  }
}
