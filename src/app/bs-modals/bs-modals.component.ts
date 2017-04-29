import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bs-modals',
  templateUrl: './bs-modals.component.html',
  styleUrls: ['./bs-modals.component.css']
})
export class BsModalsComponent implements OnInit {
@ViewChild('staticModal') staticModal;
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    this.staticModal.show();
  }
}
