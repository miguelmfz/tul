import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products.model';
import { setProductsByCategory } from '../cart.action';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styles: [
  ]
})
export class ProductsByCategoryComponent implements OnInit,OnDestroy {
  products : Product[] = []
  productsSub : Subscription
  constructor(private store:Store<AppState>, private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }
 
  ngOnInit(): void {   
    
    let id = this.activatedRoute.snapshot.paramMap.get("id")
    this.productsService.getProductsByCategory(id).subscribe((products:Product[])=>{     
      this.store.dispatch(setProductsByCategory({products:products}))
    })

    this.productsSub = this.store.select('cart').subscribe((res)=>{
      this.products = res.products
    })    
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

}
