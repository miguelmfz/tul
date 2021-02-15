import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  transformData<T>(genericObject:Object){
    if(genericObject==null){return []}
    let model:T
    const newSetModel: typeof model[] = []
    Object.keys(genericObject).forEach(key=>{
      const heroe: typeof model = genericObject[key]
      heroe['id'] = key
      newSetModel.push(heroe)
    })

    if(genericObject===null){ return[] }else{
      return newSetModel
    }

  }

}
