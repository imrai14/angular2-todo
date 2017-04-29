import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalsComponent } from '../bs-modals/bs-modals.component'
import { ModalModule } from 'ngx-bootstrap'; 

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [BsModalsComponent],
  exports : [BsModalsComponent]
})
export class SharedModule { }
