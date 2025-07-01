import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private service: ProdutoService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() produto: Produto) {
    return this.service.create(produto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto) {
    return this.service.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.delete(id);
  }
}