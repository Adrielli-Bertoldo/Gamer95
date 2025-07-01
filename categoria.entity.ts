import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../produto/produto.entity'; 

@Entity({ name: 'categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Produto, (produto: Produto) => produto.categoria)
  produtos: Produto[];
}