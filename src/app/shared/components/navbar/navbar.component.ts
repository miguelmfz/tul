import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private authServices:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authServices.logOut().then(()=>{
      this.router.navigate(["/auth"])
    });
  }

}
