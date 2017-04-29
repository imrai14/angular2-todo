/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsModalsComponent } from './bs-modals.component';

describe('BsModalsComponent', () => {
  let component: BsModalsComponent;
  let fixture: ComponentFixture<BsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
