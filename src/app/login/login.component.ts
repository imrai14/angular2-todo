import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    errorMsg : string;
    loginForm = new FormGroup ({
        email: new FormControl(),
        password : new FormControl()
    });
    constructor(private _router : Router, private fb: FormBuilder){
        this.createForm();
        
    }

     createForm() {
        this.loginForm = this.fb.group({
        email: ['', Validators.required ],
        password: ''
        });
    }

    title = 'He I am login';
    myControl: any;
    ngOnInit() {
        console.log('in ng init');
        this.myControl = new FormControl('Todd Motto');
    }

    login() {
        if(this.loginForm.get('email').value == 'qqq' && this.loginForm.get('password').value == 'qqq'){
            this._router.navigate(['dashboard']);
            console.log('right')
        }else{
            console.log('not correct')
            this.errorMsg = 'Email or password is wrong'
        }
    }



}