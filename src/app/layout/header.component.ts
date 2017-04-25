import { Component } from '@angular/core';

@Component({
    selector : 'app-header',
    template : `<div class="common-header-blk">This is top header</div>`
})

export class HeaderComponent {
    ngOnInit() {
        console.log('in ng init');
    }

}