import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,  
    children:[
      {path: '',component: HomeComponent},
      {path: 'cart/category/:id',component: ProductsByCategoryComponent},
      {path: 'cart/prduct-details/:id',component: ProductDetailsComponent},
      {path: 'cart/basket',component: BasketComponent,canActivate:[AuthGuard]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutesModule { }
