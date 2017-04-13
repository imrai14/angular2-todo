import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {LoginComponent} from './login.component'
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports : [ModalModule.forRoot()],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
