import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isBusy: Boolean = false;
  hasFailed: Boolean = false;
  loginForm: FormGroup;
  url: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
    this.url = environment.backendUrl + '/api/user/login';
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.auth.logOut();
  }

  ngOnInit() {}

  login() {
    // Reset status
    this.hasFailed = false;
    var username = this.loginForm.get('username').value;
    var password = this.loginForm.get('password').value;
    return this.http
      .post(this.url, {
        username,
        password,
      })
      .subscribe(
        response => {
          const token = response['data']['token'];
          const userId = response['data']['data']['userid'];
          this.auth.signIn(token, userId);
          this.router.navigate(['items']);
        },
        error => {
          console.log(error);
          this.hasFailed = true;
        }
      );
  }

  handleError() {
    console.log('error');
  }
}
