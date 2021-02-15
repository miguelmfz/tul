import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styles: [
  ]
})
export class ProductsFormComponent implements OnInit {

  productForm:FormGroup
  product : Product
  categories:Category[]=[]

 constructor(
   private fb:FormBuilder,
   private swalService:SwalService,
   private productServices :ProductsService,
   private categoryServices :CategoryService,
   private router:Router,
   private activatedRoute:ActivatedRoute
   ) { }

 ngOnInit(): void {
   this.productForm = this.fb.group({
     id:[''],
     name:['',[Validators.required]],     
     features:['',Validators.required],
     price:['',Validators.required],
     promotionPrice:['',Validators.required], 
     idCategory:['',Validators.required],
     imgUrl:['',Validators.required]
   })

   const id = this.activatedRoute.snapshot.paramMap.get('id')
   if(id !== 'new'){
     this.productServices.getProduct(id).subscribe((res:Category)=>{
       this.id.patchValue(id)
       this.productForm.patchValue(res);       
     })
   }
   this.categoryServices.getCategories().subscribe((res:Category[])=>{
     this.categories = res;
   })
 }

 saveProduct(){    
   if(this.productForm.valid){
    const {name,idCategory,features,price,promotionPrice,imgUrl,id}= this.productForm.value;
    this.product =  new Product(name,features,imgUrl,price,promotionPrice,idCategory,id);
    
     if(this.id.value == ""){
      this.productServices.createProduct(this.product).subscribe(res=>{
        this.swalService.Done(name);
        this.router.navigate(["/dashboard/products"]);        
      })
     }else{
      this.productServices.updateProduct(this.product).subscribe(res=>{
        this.swalService.Done(name);
        this.router.navigate(["/dashboard/products"]);        
      })
     }     
   }else{
     this.swalService.formInvalid();
   }
 }

  
 get id(){ return this.productForm.get('id') }
 get idCategory(){ return this.productForm.get('idCategory') }
 get name(){ return this.productForm.get('name') }
 get features(){ return this.productForm.get('features') }
 get price(){ return this.productForm.get('price') }
 get promotionPrice(){ return this.productForm.get('promotionPrice') }
 get imgUrl(){ return this.productForm.get('imgUrl') }

}
