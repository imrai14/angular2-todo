import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {

  constructor() { }

  userLoggedIn : boolean = false;

  // userLogin(value){
  //   console.log("value",value)
  //   // return value
    
  //   // this.userLoggedIn = value;
  // }

  userLogin(value){
    // console.log("value",value)
    return value;
  }

  // get hey(){
  //   console.log('this is called')
  //   return this.userLoggedIn;
  // }

}
