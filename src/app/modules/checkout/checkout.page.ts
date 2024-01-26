import { Component, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartService } from '../../core/services/shop-cart.service';
import { CartItem } from '../../core/interfaces';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.page.html',
  styles: []
})
export class CheckoutPage implements OnInit {

  public subtotal: number = 0;
  public totalAmount: number = 0;
  public cartItems: CartItem[] = this.shopCartService.cart().items;

  constructor(private shopCartService: ShopCartService) {
    effect(() => {
      this.subtotal = this.shopCartService.cart().totalAmount;
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
