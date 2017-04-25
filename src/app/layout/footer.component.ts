import { Component } from '@angular/core';

@Component({
    selector : 'app-footer',
    template : `<div style="position : fixed; width : 100%;bottom : 0px;">This is bottom footer</div>`
})

export class FooterComponent {
    title = 'He I am login';
    ngOnInit() {
        console.log('in ng footer');
    }

}