import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isBusy: Boolean = false;
  hasFailed: Boolean = false;
  registerForm: FormGroup;
  url: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
    this.url = environment.backendUrl + '/api/user/signup';
    this.registerForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.auth.logOut();
  }

  ngOnInit() {}

  register() {
    // Reset status
    this.hasFailed = false;
    var username = this.registerForm.get('username').value;
    var password = this.registerForm.get('password').value;

    return this.http
      .post(this.url, {
        username,
        password,
      })
      .subscribe(
        response => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(error);
          this.hasFailed = true;
        }
      );
  }
}
