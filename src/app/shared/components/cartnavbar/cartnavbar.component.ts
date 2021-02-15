import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { setProductsByCategory } from 'src/app/modules/cart/cart.action';

import { Category } from '../../models/category.model';
import { Product } from '../../models/products.model';
import * as $ from 'jquery'
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cartnavbar',
  templateUrl: './cartnavbar.component.html',
  styleUrls: ['./cartnavbar.component.css'
  ]
})
export class CartnavbarComponent implements OnInit {
  products : Cart[] = []
  categories:Category[]=[]
  total:number = 0
  constructor(private store:Store<AppState>,private categoriesServices : CategoryService,private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }
  
  ngOnInit(): void {

    this.store.select('cart').subscribe((res)=>{
      this.products = res.productOfCart
      this.total= 0
      this.products.forEach(pro=>{        
        let price = pro.promotionPrice > 0 ? pro.promotionPrice : pro.price
        this.total += price*pro.quantity 
      })
    })  
    
    this.categoriesServices.getCategories().subscribe((res:Category[])=>{     
      this.categories=res
    })

    
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });      
    
  }

  getProductByCategoty(id:string){
    this.productsService.getProductsByCategory(id).subscribe((products:Product[])=>{     
      this.store.dispatch(setProductsByCategory({products:products}))
    })
  }

}
