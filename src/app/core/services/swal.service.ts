import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  public formInvalid(){
    Swal.fire({
      icon: 'error',
      title: 'Error filling the form fields',
      text: 'Check all the form fields',         
    })
  }

  public waitAMomoent(){
    Swal.fire({
      title: 'Wait a moment',
      didOpen: () => {
        Swal.showLoading()          
      }
    })
  }

  public Error(text:string){
     Swal.fire({
        icon: 'error',
        title: 'Fail',
        text: text,         
      })
  }


  public close(){
    Swal.close()
  }

  

        
}
