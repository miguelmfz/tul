import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  products : Product[] = []
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getFirstProducts().subscribe((res:Product[])=>{
      this.products = res;
    })
  }

}
