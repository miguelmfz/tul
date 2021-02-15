import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ["./basket.component.css"
  ]
})
export class BasketComponent implements OnInit {

  products : Product[] = []
  constructor(private store:Store<AppState>,) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((res)=>{
      this.products = res.productOfCart
    })  
  }

}
