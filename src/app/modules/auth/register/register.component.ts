import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SwalService } from 'src/app/core/services/swal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private swalService:SwalService,private authServices:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      tel:['',[Validators.required,Validators.maxLength(10)]],
      password:['',Validators.required]
    })
  }

  createUser(){
    if(this.registerForm.valid){
      this.swalService.waitAMomoent()
      const {name,email,password,tel} = this.registerForm.value
      this.authServices.createUser(name,email,password,tel)
      .then(credenciales=>{              
        this.router.navigate(['/dashboard'])
        this.swalService.close()
      }).catch(err=>{
        this.swalService.Error(err.message)
      })        
    }else{
      this.swalService.formInvalid()
    }
    console.log(this.registerForm);
    
  }

}
