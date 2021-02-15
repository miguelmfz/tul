import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ["./basket.component.css"
  ]
})
export class BasketComponent implements OnInit {

  products : Cart[] = []
  total: number;
  order:Order
  constructor(private router:Router,private swal:SwalService, private store:Store<AppState>,private authService:AuthService,private cartSerice:CartService) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((res)=>{
      this.products = res.productOfCart
      this.total= 0
      this.products.forEach(pro=>{        
        let price = pro.promotionPrice > 0 ? pro.promotionPrice : pro.price
        this.total += price*pro.quantity 
      })
    })  
  }
  checkOut(){
    debugger;
    const {email,name,tel,uid} = this.authService.user
    this.order = new Order(uid,name,email,tel,this.total,[...this.products])
    this.cartSerice.createOrder(this.order).subscribe(res=>{
      this.swal.Done("Order Success, Thank a lot!")
      this.router.navigate(['/'])  
    })
  }

}
