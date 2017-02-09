import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    title = 'He I am login';
    myControl : any;
    ngOnInit() {
        console.log('in ng init');
        this.myControl = new FormControl('Todd Motto');
    }



}