import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../core/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem, Category, Product } from '../../../core/interfaces';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { ShopCartService } from '../../../core/services/shop-cart.service';
import { ProductUtil } from '../../../shared/utils/product.util';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './category-detail.page.html',
  styles: []
})
export class CategoryDetailPage {

  public category?: Category;
  public products: Product[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private shopCartService: ShopCartService,
              private productUtil: ProductUtil,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      const slug = p['slug'];
      if (slug) {
        this.getCategory(slug);
        this.getProducts();
      }
    })
  }

  getCategory(slug: string): void {
    this.categoryService.getBySlug(slug).subscribe(res => this.category = res);
  }

  getProducts(): void {
    this.productService.getAll().subscribe(res => this.products = this.productUtil.randomSort(res));
  }

  saveCartItem(event: CartItem): void {
    this.shopCartService.saveItem(event);
  }

}
