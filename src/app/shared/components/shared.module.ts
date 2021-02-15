import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CartnavbarComponent } from './cartnavbar/cartnavbar.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent, CartnavbarComponent, BannerComponent],
  imports: [
    CommonModule,RouterModule
  ],exports:[
    SidebarComponent, NavbarComponent,CartnavbarComponent,BannerComponent
  ]
})
export class SharedModule { }
