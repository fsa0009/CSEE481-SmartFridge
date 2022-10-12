import { HttpClient } from '@angular/common/http';
import { Component , Injectable, OnInit } from '@angular/core';
import { PantryItems } from './Items.model';


@Injectable()
@Component({
  selector: 'items-list',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.css']
})
export class ItemsListComponent implements OnInit {

    pantryItemOne: PantryItems | undefined ; 
    pantryItemTwo: PantryItems | undefined ; 
    pantryItemThree: PantryItems | undefined ; 
    pantryItemFour: PantryItems | undefined ; 
    pantryItemFive: PantryItems | undefined ; 
    pantryItemSix: PantryItems | undefined ; 

    BaseURL: string; 
    
  constructor(private http: HttpClient){
    this.BaseURL = 'https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/pantry-items/' ; 
   
  }

  getItemInfo(completeURL:string){
    
    return this.http.get<PantryItems>(this.BaseURL + completeURL);
  }

  subscribeToInfo(){
    this.getItemInfo('item-one.json').subscribe( (data: PantryItems )=>
        { 
            console.log(data) ;
            this.pantryItemOne = data ; 
         });
    this.getItemInfo('item-two.json').subscribe( (data: PantryItems )=>
         { 
             console.log(data) ;
             this.pantryItemTwo = data ; 
          });

    this.getItemInfo('item-three.json').subscribe( (data: PantryItems )=>
        { 
            console.log(data) ;
            this.pantryItemThree = data ; 
         });
    this.getItemInfo('item-four.json').subscribe( (data: PantryItems )=>
         { 
             console.log(data) ;
             this.pantryItemFour = data ; 
          });

    this.getItemInfo('item-five.json').subscribe( (data: PantryItems )=>
          { 
              console.log(data) ;
              this.pantryItemFive = data ; 
           });
    this.getItemInfo('item-six.json').subscribe( (data: PantryItems )=>
           { 
               console.log(data) ;
               this.pantryItemSix = data ; 
            });




  }

  ngOnInit(): void{
    this.subscribeToInfo();
    console.log("succes suscribing");
    
  }
}
