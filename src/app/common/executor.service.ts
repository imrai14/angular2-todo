import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class ExecutorService {

    constructor(private _http: Http, private _router: Router) {
    }
}
