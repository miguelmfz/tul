import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CartnavbarComponent } from './cartnavbar/cartnavbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardCartComponent } from './card-cart/card-cart.component';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent, CartnavbarComponent, BannerComponent, CardCartComponent],
  imports: [
    CommonModule,RouterModule
  ],exports:[
    SidebarComponent, NavbarComponent,CartnavbarComponent,BannerComponent,CardCartComponent
  ]
})
export class SharedModule { }
