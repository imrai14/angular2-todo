import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component'
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports: [ModalModule.forRoot(),
  RouterModule.forChild([{ path: 'login', component: LoginComponent }])
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
