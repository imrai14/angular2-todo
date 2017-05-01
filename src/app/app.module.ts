import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { LoginModule} from './login/login.module'
import { HeaderComponent } from './layout/header.component'
import { FooterComponent } from './layout/footer.component'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupModule } from './signup/signup.module';
import { SharedModule } from './shared/shared.module';
import { SharedServiceService } from './shared-services/shared-service.service'

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot([{ path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }]),
    DashboardModule,
    LoginModule,
    SignupModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
