import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/interfaces/product.interface';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductUtil } from '../../shared/utils/product.util';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.page.html',
  styles: []
})
export class ProductPage implements OnInit {

  public product?: Product;

  constructor(private productService: ProductService,
              public productUtil: ProductUtil,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      const slug = p['slug'];
      if (slug) {
        this.getProduct(slug);
      }
    })
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getProduct(slug: string): void {
    this.productService.getBySlug(slug)
      .subscribe(res => this.product = res);
  }

}
