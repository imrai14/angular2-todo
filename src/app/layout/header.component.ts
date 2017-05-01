import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FacebookService } from 'ngx-facebook';
import { SharedServiceService } from '../shared-services/shared-service.service'


@Component({
    selector : 'app-header',
    template : `
    <div class="common-header-blk">
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/login']">Login - {{_sharedService.userLoggedIn}}</a></li>
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
    constructor(private fb: FacebookService, private _route : Router, private _sharedService : SharedServiceService){

    }
    ngOnInit() {
        console.log('in ng init');
    }

    logout(){
        console.log('logout');
        let hi = this._sharedService.userLogin(false);
        console.log("hey",hi)
        this.fb.logout().then(() => {
            localStorage.clear();
            this._sharedService.userLogin(false);
            this._route.navigate(['/']);
            console.log('Logged out!')
        });
    }

}