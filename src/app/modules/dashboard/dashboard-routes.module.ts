import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,  
    children:[
      {path: 'orders',component: OrdersListComponent},
      {path: 'orders/:id',component: OrdersDetailsComponent},
      {path: 'products',component: ProductsListComponent},
      {path: 'products/:id',component: ProductsFormComponent},
      {path: 'categories',component: CategoriesListComponent},
      {path: 'categories/:id',component: CategoriesFormComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutesModule { }
