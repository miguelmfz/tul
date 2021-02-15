import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { HelperService } from './helper.service';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpCliente:HttpClient,private helper:HelperService) { }

  createCategory(category:Category){
    delete category.id;
    return this.httpCliente.post<Category>(`Categories.json`,category) 
  }

  getCategories(){
    return this.httpCliente.get<Category[]>(`Categories.json`).pipe(
       map(this.helper.transformData)
    )
  }

  getFirstCategories(){
    return this.httpCliente.get<Category[]>("Categories.json?orderBy=%22$key%22&limitToFirst=3").pipe(
      map(this.helper.transformData)
   )
  }

  updateCategory(category:Category){
    const categoryTemp = {...category}
    delete categoryTemp.id;
    return this.httpCliente.put<Category>(`Categories/${category.id}.json`,categoryTemp)
  }

  deleteCategory(id:string){
    return this.httpCliente.delete(`Categories/${id}.json`)
  }

  getCategory(id:string){
    return this.httpCliente.get(`Categories/${id}.json`)
  }

}
