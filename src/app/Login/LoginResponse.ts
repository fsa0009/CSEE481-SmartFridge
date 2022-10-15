export interface LoginResponse{

    //This response is for sign up and sign in except for the last part 
    idToken:	string	,
    email:	string	,
    refreshToken	:string	,
    expiresIn	:string	,
    localId	:string	,
    // for login response only => '?' means optional 
    registered?: boolean

}