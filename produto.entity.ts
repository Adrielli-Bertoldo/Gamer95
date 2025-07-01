    import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../categoria/categoria.entity';
import { IsNotEmpty, IsPositive } from 'class-validator';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  nome: string;

  @Column('decimal')
  @IsPositive()
  preco: number;

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  categoria: Categoria;
}
