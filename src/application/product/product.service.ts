import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product/product';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  addProduct(name: string, description: string, price: number): string {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, name, price, description);
    this.products.push(newProduct);
    return prodId;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }
}
