import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Categoria } from '../categoria/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria])],
  providers: [ProdutoService],
  controllers: [ProdutoController]
})
export class ProdutoModule {}