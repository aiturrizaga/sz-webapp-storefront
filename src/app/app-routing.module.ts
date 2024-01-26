import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './modules/home/home.page';
import { ShopCartPage } from './modules/shop-cart/shop-cart.page';
import { SearchPage } from './modules/search/search.page';
import { ProductPage } from './modules/product/product.page';
import { CategoryPage } from './modules/category/category.page';
import { CategoryDetailPage } from './modules/category/detail/category-detail.page';
import { ShopPage } from './modules/shop/shop.page';
import { CheckoutPage } from './modules/checkout/checkout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'carrito-compras',
        component: ShopCartPage
      },
      {
        path: 'checkout',
        component: CheckoutPage
      },
      {
        path: 'buscar',
        component: SearchPage
      },
      {
        path: 'productos/:slug',
        component: ProductPage
      },
      {
        path: 'tiendas',
        component: ShopPage
      },
      {
        path: 'categorias',
        component: CategoryPage,
        children: [
          {
            path: ':slug',
            component: CategoryDetailPage
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
