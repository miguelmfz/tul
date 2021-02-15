import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { typeOfUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private swalService:SwalService, private authServices:AuthService , private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({   
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  login(){
    const {email,password} = this.loginForm.value
    if(this.loginForm.valid){
      this.swalService.waitAMomoent()
      this.authServices.login(email,password)
      .then(credenciales=>{       
       if(this.authServices.user.tipo==typeOfUser.admin){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/cart/basket'])          
        }
        this.swalService.close()  
      }).catch(err=>{      
        console.log(err);
         
        this.swalService.close()
        this.swalService.Error(err.message)
      });
    }else{
      this.swalService.formInvalid()
    }
    
  }

}
