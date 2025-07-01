import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [TypeOrmModule]
})
export class CategoriaModule {}