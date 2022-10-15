export class User {
public email: string ; 
public id: string ; 
private token: string ; 
private tokenExpirationDate: Date ; 

public constructor (email:string , id:string , token:string , tokenExpirationDate:Date){
    this.email = email; 
    this.id = id; 
    this.token = token; 
    this.tokenExpirationDate = tokenExpirationDate; 


}

get userToken(){

    if(!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
        return null; 
    }

    return this.token; 




}




}