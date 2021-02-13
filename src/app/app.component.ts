import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  constructor(private authServices:AuthService){
    this.authServices.initAuthListener()
  }
  title = 'tul';
}
