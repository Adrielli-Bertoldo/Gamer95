import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepo.find({ relations: ['produtos'] });
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepo.findOne({ where: { id }, relations: ['produtos'] });
  }

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepo.save(categoria);
  }

  update(id: number, categoria: Categoria): Promise<Categoria> {
    categoria.id = id;
    return this.categoriaRepo.save(categoria);
  }

  delete(id: number): Promise<void> {
    return this.categoriaRepo.delete(id).then(() => {});
  }
}
