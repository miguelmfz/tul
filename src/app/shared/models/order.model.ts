import { Cart } from "./cart.model";

export class Order {
    constructor(
       
        public idUser:string,
        public name:string,
        public email:string,
        public tel:string,  
        public total:number,  
        public product:Cart[],
        public id?:string, ) {
        
    }
}