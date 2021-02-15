import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/core/services/category.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { Category } from 'src/app/shared/models/category.model';
import { setCategories } from '../categories.action';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {

  categories : Category[] = []
  constructor(
    private categoriesServices:CategoryService,
    private swalService:SwalService) { }

  ngOnInit(): void {
    this.categoriesServices.getCategories().subscribe((res:Category[])=>{     
      this.categories=res
    })
    
  }
  delete(item:Category,index:number){
    this.swalService.ConfirmDelete().then((result) => {
      if (result.isConfirmed) {
        this.categoriesServices.deleteCategory(item.id).subscribe(()=>{
          this.swalService.Done("Delete success")
        })
        this.categories.splice(index,1)
      } else if (result.isDenied) {
        
      }    
    })
  }
}
