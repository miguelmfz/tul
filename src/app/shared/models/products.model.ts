export class Product{
    constructor(
        public name:string,
        public features:string,
        public imgUrl:string,
        public price:number,
        public promotionPrice:number,
        public idCategory:string,
        public id?:string
    ){
    }
}