import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './Items-List/Items.component';
import { LayoutComponent } from './Home-Page/Layout.component';
import { ShoppingListComponent } from './Shopping-List/Shopping-List.component';
import { RecipesComponent } from './Recipes/Recipes.component';
import { BodyComponent } from './Home-Page/Body.component';
import { AboutProjectComponent } from './About/AboutProject.component';
import { LoginComponent } from './Login/Login.component';


const routes: Routes = [
  {path:'home' , component: BodyComponent},
  {path:'items' , component: ItemsListComponent},
  {path:'shopping-list' , component: ShoppingListComponent},
  {path:'recipes' , component: RecipesComponent},
  {path:'aboutproject' , component: AboutProjectComponent},
  {path:'login' , component: LoginComponent},
  {path:'' , component: LoginComponent}

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
   
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
