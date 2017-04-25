import { Component } from '@angular/core';

@Component({
    selector : 'app-header',
    template : `
    <div class="common-header-blk">
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
                </ul>
            </div>
        </nav>
     </div>`
})

export class HeaderComponent {
    ngOnInit() {
        console.log('in ng init');
    }

}