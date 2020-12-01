import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  isSubmitting = false;
  loginForm: FormGroup;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
       

  }

  ngOnInit() {

  }

  loginSubmit() {
    this.isSubmitting = true;
    const user_data = this.loginForm.value;
    this.userService.attemptAuth('login', user_data).subscribe(
      data => {
        location.reload();
      },
      err => {
        console.log("error");
        // this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

}

