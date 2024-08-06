// src/category/category.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/models/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
}
