import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { Category } from 'src/app/shared/models/category.model';
import { Order } from 'src/app/shared/models/order.model';
import { AuthService } from './auth.service';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private authServices:AuthService, private httpCliente:HttpClient,private helper:HelperService) { }


  createOrder(order:Order){
    delete order.id;
    return this.httpCliente.post<Order>(`Order.json`,order) 
  }

  getOrders(){    
    let id = this.authServices.user.uid    
    return this.httpCliente.get<Order[]>(`Order.json?orderBy="idUser"&startAt="${id}"`).pipe(
      map(this.helper.transformData)
   )
  }
  getOrder(id:string){    
    return this.httpCliente.get<Cart[]>(`Order/${id}/product.json`) 
  }  

}
