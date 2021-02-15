import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducers';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/components/shared.module';
import { HttpInterceptors } from './core/interceptors/http.interceptors';





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
    HttpClientModule,
    
   

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
