import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styles: [
  ]
})
export class CategoriesFormComponent implements OnInit {

  categoryForm:FormGroup
   category : Category

  constructor(
    private fb:FormBuilder,
    private swalService:SwalService,
    private categoryServices :CategoryService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id:[''],
      name:['',[Validators.required]],
      urlImage:['',Validators.required]
    })

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id !== 'new'){
      this.id.patchValue(id)
      this.categoryServices.getCategory(id).subscribe((res:Category)=>{
        this.categoryForm.patchValue(res);       
      })
    }
  }

  saveCategory(){    
    if(this.categoryForm.valid){
      const {name,urlImage}= this.categoryForm.value;
      this.category =  new Category(name,urlImage,this.id.value);
      
      if(this.id.value == ""){       
        this.categoryServices.createCategory(this.category).subscribe(res=>{
          console.log(res);
          this.swalService.Done(name);
          this.router.navigate(["/dashboard/categories"]);        
        })//updateProduct
      }else{
        this.categoryServices.updateCategory(this.category).subscribe(res=>{
          console.log(res);
          this.swalService.Done(name);
          this.router.navigate(["/dashboard/categories"]);        
        })
      }
    }else{
      this.swalService.formInvalid();
    }
  }

  get id(){ return this.categoryForm.get('id') }
  get name(){ return this.categoryForm.get('name') }
  get urlImage(){ return this.categoryForm.get('urlImage') }

}
