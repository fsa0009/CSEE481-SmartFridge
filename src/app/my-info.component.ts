import { HttpClient } from '@angular/common/http';
import { Component , Injectable, OnInit } from '@angular/core';
import { TheInfo } from './my-info.model';



@Injectable()
@Component({
  selector: 'my-info',
  templateUrl: './My-Info.component.html'
  //styleUrls: ['./app.component.css']
})
export class MyInfoComponent implements OnInit {
    myInfo: TheInfo | undefined ; 
  constructor(private http: HttpClient){
   
  }

  getMyInfo(){
    
    return this.http.get<TheInfo>('https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/my-info.json');
  }

  subscribeToInfo(){
    this.getMyInfo().subscribe( (data: TheInfo )=>
        { 
            console.log(data) ;
            this.myInfo = data ; 
         });
  }

  ngOnInit(): void{
    this.subscribeToInfo();
    console.log("succes suscribing");
    
  }
}
