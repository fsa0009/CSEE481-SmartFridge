import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Subject, tap } from 'rxjs';
import { LoginResponse } from './LoginResponse';
import { User } from './User.model';

@Injectable({
    providedIn: 'root'
})



export class LoginService {

    API_KEY :string = "AIzaSyDEB5qdpI_D371iICJlHKfU67Op1e5JVeA" ; 

    baseURL: string = "https://identitytoolkit.googleapis.com/v1/accounts" ;
    signUpEndPoint: string = "signUp";

    signInEndPoint:string = "signInWithPassword"; 

    public user:Subject<User> = new Subject<User>() ; 

    public constructor(private http: HttpClient){

        

    }

  public signUp(email: string , password:string){
    const requestBody ={
        "email": email,
        "password": password, 
        "returnSecureToken" : true 
    };

    return this.http.post<LoginResponse>(this.baseURL + ':' + this.signUpEndPoint + '?' + 'key=' + this.API_KEY , requestBody ) ; 


  }

  public signIn(email: string , password:string){
    const requestBody ={
        "email": email,
        "password": password, 
        "returnSecureToken" : true 
    };

    return this.http.post<LoginResponse>(this.baseURL + ':' + this.signInEndPoint + '?' + 'key=' +
    this.API_KEY , requestBody ).pipe(
        tap(
            (data:LoginResponse) =>{
                const currentTime = new Date().getTime(); 
                const expirationDate = new Date(currentTime + +data.expiresIn * 1000) ; 
                const user = new User(data.email , data.localId, data.idToken, expirationDate);
                this.user.next(user);
                console.log(user); 
            }
        )
    ) ; 


  }


  
}
