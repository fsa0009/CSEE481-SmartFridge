import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Home-Page/Login.component';
import { TopNavBarComponent } from './Home-Page/Top-NavBar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
