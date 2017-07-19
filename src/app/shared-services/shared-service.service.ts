import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SharedServiceService {

  constructor() { }
  private userUpdated = new Subject<boolean>();
	userUpdated$ = this.userUpdated.asObservable();
  userLoggedIn : boolean = false;

  announceUserUpdate(value){
    // debugger
    console.log('this is called')
    console.log(value)
		this.userUpdated.next(value);
	}

  userLogin(value){
    // console.log("value",value)
    return value;
  }

  // get hey(){
  //   console.log('this is called')
  //   return this.userLoggedIn;
  // }

}
