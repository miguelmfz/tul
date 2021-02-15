import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ProductsService } from 'src/app/core/services/products.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { Product } from 'src/app/shared/models/products.model';
import { addProductToCart } from '../cart.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [ './product-details.component.css'
  ]
})
export class ProductDetailsComponent implements OnInit {
  product : Product
  detailForm:FormGroup;
  constructor(private fb:FormBuilder, private store:Store<AppState> ,private location:Location, private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.detailForm = this.fb.group({
      quantity:['1',[Validators.required,Validators.min(1)]]
    })

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.productsService.getProduct(id).subscribe((res:Product)=>{
      this.product = res;
    },err=>{
      this.location.back()
    })
  }

  addToCart(){
    if(this.detailForm.valid){
      const {id,idCategory,name,features,promotionPrice,price,imgUrl,} = this.product
      const cart = new Cart(name,features,imgUrl,price,this.quantity.value,promotionPrice,idCategory,id)    
      delete cart.id
      this.store.dispatch(addProductToCart({cart:cart}))
    }
    
  }

  get quantity(){return this.detailForm.get("quantity")}


}
