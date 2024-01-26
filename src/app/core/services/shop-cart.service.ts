import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartItem, ShoppingCart } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  public cart: WritableSignal<ShoppingCart> = signal<ShoppingCart>({
    items: [],
    totalAmount: 0
  });

  constructor() {
  }

  saveItem(item: CartItem): void {
    this.cart.mutate(currentCart => {
      const index = currentCart.items.findIndex(i => i.productId === item.productId);
      if (index !== -1) {
        currentCart.items[index] = {...item};
        if (item.quantity <= 0) {
          currentCart.items.splice(index, 1);
        }
      } else {
        currentCart.items.push(item);
      }
      currentCart.totalAmount = currentCart.items.reduce((next, item) => next + item.subtotal, 0);
    })
  }

  removeItem(productId: number): void {
    this.cart.mutate(currentCart => {
      const index = currentCart.items.findIndex(i => i.productId === productId);
      if (index !== -1) {
        currentCart.items.splice(index, 1);
        currentCart.totalAmount = currentCart.items.reduce((next, item) => next + item.subtotal, 0);
      }
    })
  }
}
