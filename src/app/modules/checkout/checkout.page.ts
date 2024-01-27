import { Component, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartService } from '../../core/services/shop-cart.service';
import { CartItem } from '../../core/interfaces';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.page.html',
  styles: []
})
export class CheckoutPage implements OnInit {

  public deliveryMethod: string = '';
  public deliveryAmount: number = 0;
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
    this.setDeliveryMethod('express');
  }

  setDeliveryMethod(method: string): void {
    this.deliveryMethod = method;

    switch (method) {
      case 'express':
        this.deliveryAmount = 30.00;
        break;
      case 'classic':
        this.deliveryAmount = 12.00;
        break;
      default:
        this.deliveryAmount = 10.00;
        break;
    }

    this.totalAmount = this.subtotal + this.deliveryAmount;
  }

}
