import { Categoria } from './categoria/categoria.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
// Importe suas entidades aqui

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_gamer95',
      entities: [Categoria], // Adicione suas entidades aqui
      synchronize: true,
    }),
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
