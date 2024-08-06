// src/category/category.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/models/category.entity';

@Injectable()
export class CategoryService {
  private categories = [];

  create(createCategoryDto: CreateCategoryDto) {
    this.categories.push(createCategoryDto);
    return 'Category added successfully';
  }

  findAll() {
    return this.categories;
  }
}
