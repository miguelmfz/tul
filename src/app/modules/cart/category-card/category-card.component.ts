import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styles: [
  ]
})
export class CategoryCardComponent implements OnInit {

  categories:Category[] = []
  constructor(private cardServices:CategoryService) { }

  ngOnInit(): void {
    this.cardServices.getFirstCategories().subscribe((res:Category[])=>{
      
      this.categories = res
      console.log(res);
      
    })
  }

}
