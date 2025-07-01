import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../categoria/categoria.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepo: Repository<Produto>,
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepo.find({ relations: ['categoria'] });
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepo.findOne({ where: { id }, relations: ['categoria'] });
  }

  async create(produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepo.findOne({ where: { id: produto.categoria.id } });
    produto.categoria = categoria;
    return this.produtoRepo.save(produto);
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepo.findOne({ where: { id: produto.categoria.id } });
    produto.id = id;
    produto.categoria = categoria;
    return this.produtoRepo.save(produto);
  }

  delete(id: number): Promise<void> {
    return this.produtoRepo.delete(id).then(() => {});
  }
}
