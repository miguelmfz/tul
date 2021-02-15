import  { Product } from './products.model'
export class Cart{
    constructor( 
        public name:string,
        public features:string,
        public imgUrl:string,
        public price:number,
        public quantity:number,
        public promotionPrice:number,
        public idCategory:string,
        public idProduct:string,
        public id?:string){
    }
}