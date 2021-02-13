import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutesModule } from './dashboard-routes.module';

import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';



@NgModule({
  declarations: [IndexComponent, OrdersListComponent, OrdersDetailsComponent, ProductsFormComponent, CategoriesListComponent, CategoriesFormComponent, ProductsListComponent],
  imports: [
    CommonModule,
    DashboardRoutesModule,
    SharedModule,
  ]
})
export class DashboardModule { }
