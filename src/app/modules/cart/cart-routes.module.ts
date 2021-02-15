import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,  
    children:[
      {path: '',component: HomeComponent},
      {path: 'cart/category/:id',component: ProductsByCategoryComponent},
      {path: 'cart/prduct-details/:id',component: ProductDetailsComponent},
      {path: 'cart/basket',component: BasketComponent,canActivate:[AuthGuard]},
      {path: 'cart/orders',component: OrdersComponent,canActivate:[AuthGuard]},
      {path: 'cart/orders/details/:id',component: OrdersDetailsComponent,canActivate:[AuthGuard]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutesModule { }
