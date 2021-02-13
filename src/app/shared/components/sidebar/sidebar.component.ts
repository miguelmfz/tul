import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit,OnDestroy {

  name:string=""
  userSup:Subscription
  constructor(private store:Store<AppState>) { }
  

  ngOnInit(): void {
    this.store.select("user").subscribe(({user})=>{
      
      this.name= user?.name
    })
  }
  ngOnDestroy(): void {
    this.userSup?.unsubscribe()
  }

}
