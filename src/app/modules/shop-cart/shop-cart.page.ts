import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-cart.page.html',
  styles: []
})
export class ShopCartPage implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
