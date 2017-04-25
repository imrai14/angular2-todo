import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private _router : Router){
        
    }
    title = 'He I am login';
    myControl: any;
    ngOnInit() {
        console.log('in ng init');
        this.myControl = new FormControl('Todd Motto');
    }

    goToNextPage() {
        console.log("goToNextPage")
        this._router.navigate(['/dashboard']);
    }



}