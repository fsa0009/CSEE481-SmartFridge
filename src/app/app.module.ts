import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './Home-Page/Body.component';
import { BottomNavBarComponent } from './Home-Page/Bottom-NavBar.component';
import { LayoutComponent } from './Home-Page/Layout.component';
import { LoginComponent } from './Login/Login.component';
import { TopNavBarComponent } from './Home-Page/Top-NavBar.component';
import { ItemsListComponent } from './Items-List/Items.component';
import { RecipesComponent } from './Recipes/Recipes.component';
import { ShoppingListComponent } from './Shopping-List/Shopping-List.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutProjectComponent } from './About/AboutProject.component';
import { HttpClientModule } from '@angular/common/http';
import { MyInfoComponent } from './my-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LoginComponent,
    LayoutComponent,
    BodyComponent,
    BottomNavBarComponent,
    ShoppingListComponent,
    ItemsListComponent,
    RecipesComponent,
    AboutProjectComponent,
    LoginComponent,
    MyInfoComponent,
  
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
