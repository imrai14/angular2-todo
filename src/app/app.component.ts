import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private _router: Router, private fb: FacebookService) {
    let initParams: InitParams = {
          appId: '128971200982876',
          xfbml: true,
          version: 'v2.8'
      };
      fb.init(initParams);

  }



  title = 'Welcome, Please Login';


}
