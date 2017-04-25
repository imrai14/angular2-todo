import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component'



@NgModule({
  imports: [ReactiveFormsModule,
  RouterModule.forChild([{ path: 'login', component: LoginComponent }])
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
