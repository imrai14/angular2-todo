import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FacebookService } from 'ngx-facebook';

@Component({
    selector : 'app-header',
    template : `
    <div class="common-header-blk">
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/register']">Register</a></li>
                </ul>
                <ul class='nav navbar-nav pull-right'>
                    <li><a href="javascript:void(0)" (click)="logout()">Logout</a></li>
                </ul>
            </div>
        </nav>
     </div>`
})

export class HeaderComponent {
    constructor(private fb: FacebookService, private _route : Router){

    }
    ngOnInit() {
        console.log('in ng init');
    }

    logout(){
        console.log('logout');
        this.fb.logout().then(() => {
            localStorage.clear();
            this._route.navigate(['/']);
            console.log('Logged out!')
        });
    }

}