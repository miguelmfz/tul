import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [".mt-5, .my-5 {margin-top: 6rem!important;}"
  ]
})
export class OrdersComponent implements OnInit {

  orders:Order[]  = []

  constructor(private authServices:AuthService,  private cartServices:CartService ) { }

  ngOnInit(): void {
    this.cartServices.getOrders().subscribe((orders:Order[])=>{
      this.orders = orders
    })
     
    

  }

}
