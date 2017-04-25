import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private _router: Router, private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit() {
  }

  errorMsg: string;
  signUpForm = new FormGroup({
    email: new FormControl(),
    pass: new FormControl(),
    name: new FormControl(),
    phone: new FormControl(),
    cpass: new FormControl()
  });

  createForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      pass: ['', Validators.required],
      cpass: ''
    });
  }

  register() {
    if (this.signUpForm.get('name').value == 'qqq') {
      this._router.navigate(['dashboard']);
    } else {
      console.log('not correct')
      this.errorMsg = 'Email or password is wrong'
    }
  }

}
