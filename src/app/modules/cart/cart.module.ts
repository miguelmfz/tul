import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutesModule } from './cart-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CategoryCardComponent } from './category-card/category-card.component';
import { BasketComponent } from './basket/basket.component';





@NgModule({
  declarations: [IndexComponent, HomeComponent, ProductsByCategoryComponent, ProductDetailsComponent, CardComponent, CategoryCardComponent, BasketComponent],
  imports: [
    CommonModule,
    CartRoutesModule,ReactiveFormsModule,FormsModule,SharedModule
  ]
  
})
export class CartModule { }
