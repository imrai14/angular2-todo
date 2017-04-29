import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    { path: 'dashboard', component: DashboardComponent },
  ])],
  declarations: [DashboardComponent]
})
export class DashboardModule { }