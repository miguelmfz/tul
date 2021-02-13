import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { appReducers } from './app.reducers';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/components/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule ,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge:25,logOnly:environment.production
    }),
    SharedModule,
    DashboardModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
