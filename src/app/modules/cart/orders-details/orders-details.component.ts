import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styles: [`.mt-5, .my-5 {margin-top: 5rem!important;}`
  ]
})
export class OrdersDetailsComponent implements OnInit {
  products:Cart[] = []
  total: number=0;
  constructor(private cartServices:CartService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id")
    this.cartServices.getOrder(id).subscribe(products=>{
      this.products=products
      this.products.forEach(pro=>{    
        let price = pro.promotionPrice > 0 ? pro.promotionPrice : pro.price
        this.total += price*pro.quantity 
      })

    })

    
    
  }

}
