import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/products.model';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpCliente:HttpClient,private helper:HelperService) { }

  createProduct(product:Product){
    delete product.id;
    
    return this.httpCliente.post<Product>(`Products.json`,product) 
  }
//Categories/${product.idCategory}/

//https://tul-test-3b3e7-default-rtdb.firebaseio.com/Products.json?orderBy=%22idCategory%22&startAt=%22-MTTedib3GWv3MITfvBP%22
  updateProduct(product:Product){
    const productTemp = {...product}
    delete productTemp.id;
    return this.httpCliente.put<Product>(`Products/${product.id}.json`,productTemp)
  }

  getProducts(){
    return this.httpCliente.get<Product[]>(`Products.json`).pipe(
       map(this.helper.transformData)
    )
  }

  deleteProduct(id:string){
    return this.httpCliente.delete(`Products/${id}.json`)
  }

  getProduct(id:string){
    return this.httpCliente.get(`Products/${id}.json`)
  }

  getFirstProducts(){
    return this.httpCliente.get<Product[]>("Products.json?orderBy=%22$key%22&limitToFirst=6").pipe(
      map(this.helper.transformData)
   )
  }
  getProductsByCategory(id:string){
    return this.httpCliente.get<Product[]>(`Products.json?orderBy=%22idCategory%22&startAt=%22${id}%22`).pipe(
      map(this.helper.transformData)
   )
  }
  //https://tul-test-3b3e7-default-rtdb.firebaseio.com/

}
