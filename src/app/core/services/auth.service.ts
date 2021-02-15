import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { AppState } from 'src/app/app.reducers';

import { setUser, unSetUser } from 'src/app/modules/auth/auth.actions';
import { User,typeOfUser } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSup:Subscription;
  private _userActive:User;

  constructor(private auth:AngularFireAuth,
    private firestore:AngularFirestore,private store :Store<AppState>) { }

    initAuthListener(){
      this.auth.authState.subscribe(user=>{  
        if(user){
          this.userSup=this.firestore.doc(`/${user.uid}/user`).valueChanges().subscribe((res:any) =>{
            const user = User.fromFirabase(res)
            this._userActive = user;
            this.store.dispatch(setUser({user:user} ))        
          })        
        }else{
          this.userSup?.unsubscribe()
          this.store.dispatch(unSetUser())
          this._userActive = null;
        }     
        
      })
    }


  createUser(name:string,email:string,password:string,tel:string){   
    return this.auth.createUserWithEmailAndPassword(email,password)
      .then( ({user}) =>{
        const newUser =  new User(user.uid,name,user.email,tel,typeOfUser.user)        
        return this.firestore.doc(`${user.uid}/user`).set({...newUser}).then(()=>{
  
        })
      })
    }

  login(email:string,password:string){   
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  logOut(){
    return this.auth.signOut();
  }
  get user(){
    return {...this._userActive} ;
  }

  isAuth(){
    return this.auth.authState.pipe(
      map(fbuser=>fbuser != null )
    );
  }
}
