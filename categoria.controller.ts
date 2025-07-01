import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private service: CategoriaService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() categoria: Categoria) {
    return this.service.create(categoria);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() categoria: Categoria) {
    return this.service.update(id, categoria);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.delete(id);
  }
}