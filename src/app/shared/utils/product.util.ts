import { Injectable } from '@angular/core';
import { Product, ProductPrice } from '../../core/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductUtil {
  getFlatPrices(prices: ProductPrice[]): any[] {
    return prices.filter(res => !res.salient);
  }

  getSalientPrice(prices: ProductPrice[]): any[] {
    return prices.filter(res => res.salient);
  }

  getDefaultPrice(prices: ProductPrice[]): number {
    const item = prices.find(res => res.default);
    return item?.price ?? 0;
  }

  randomSort(products: Product[]): Product[] {
    const clone: Product[] = [...products];
    for (let i: number = clone.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [clone [i], clone [j]] = [clone [j], clone [i]];
    }
    return clone;
  }

}
