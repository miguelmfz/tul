import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products : Product[] = []
  constructor(private productServices:ProductsService,
    private swalService:SwalService) { }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe((res:Product[])=>{     
      this.products=res
    })
  }

  delete(item:Product,index:number){
    this.swalService.ConfirmDelete().then((result) => {
      if (result.isConfirmed) {
        this.productServices.deleteProduct(item.id).subscribe(()=>{
          this.swalService.Done("Delete success")
        })
        this.products.splice(index,1)
      } else if (result.isDenied) {
        
      }    
    })
  }



}
