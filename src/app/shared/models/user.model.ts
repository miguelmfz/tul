export class User{

    static fromFirabase({email,name,uid,tel,tipo}){
        return new User(uid,name,email,tel,tipo)
    }

    constructor(
        public uid:string,
        public name:string,
        public email:string,
        public tel:string,
        public tipo:string,
    ){}

   
} 
export enum typeOfUser {
    admin = "ADMINISTRATOR",
    user = "USER",    
}