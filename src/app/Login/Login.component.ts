import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Login.Service';
import { LoginResponse } from './LoginResponse';

@Component({
  selector: 'login',
  templateUrl: './Login.component.html'
  //styleUrls: ['./app.component.css']
})
export class LoginComponent {

  constructor(private LoginService : LoginService , private router:Router){

  }

  public onSignUpSubmit(data: NgForm){
    console.log("Clicked Sign Up button"); 
    console.log(data.value); 

    this.LoginService.signUp(data.value.email , data.value.password).subscribe((data:LoginResponse) => {
      console.log(data); 
    }) ; 
    
  }
  
  public onSignInSubmit(data: NgForm){
    console.log("Clicked SignIn button"); 
    console.log(data.value); 

    this.LoginService.signIn(data.value.email , data.value.password).subscribe((data:LoginResponse) => {
      console.log(data); 
      this.router.navigate(['/items']);
    }) ; 
    data.resetForm(); 
    
  }



  
}
