import { Component } from '@angular/core';

@Component({
    selector : 'app-footer',
    template : `<div class="common-footer-blk">@2017 Copyright ABC Inc</div>`
})

export class FooterComponent {
    title = 'He I am login';
    ngOnInit() {
        console.log('in ng footer');
    }

}