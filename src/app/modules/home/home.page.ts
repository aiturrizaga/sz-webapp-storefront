import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../shared/directives';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ShopCartService } from '../../core/services/shop-cart.service';
import { CartItem } from '../../core/interfaces';
import { Product } from '../../core/interfaces/product.interface';
import { ProductService } from '../../core/services/product.service';
import { swiperConfig } from '../../core/config/swiper.config';
import { BannerService } from '../../core/services/banner.service';
import { Banner } from '../../core/interfaces/banner.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SwiperDirective,
    ProductCardComponent
  ],
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  public products: Product[] = [];
  public banners: Banner[] = [];
  public bannerCarouselConfig: SwiperOptions = swiperConfig;

  constructor(private productService: ProductService,
              private bannerService: BannerService,
              private shopCartService: ShopCartService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getBanners();
    this.getProducts();
  }

  getBanners(): void {
    this.bannerService.getAll().subscribe(res => this.banners = res);
  }

  getProducts(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }

  saveCartItem(event: CartItem): void {
    this.shopCartService.saveItem(event);
  }

}
