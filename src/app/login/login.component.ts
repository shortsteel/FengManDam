import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static LOGGED_IN = 'fengManLoggedIn';
  loginFormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  static isLoggedIn(): boolean {
    return localStorage.getItem(LoginComponent.LOGGED_IN) === LoginComponent.LOGGED_IN;
  }

  constructor(private router: Router) {
    if (LoginComponent.isLoggedIn()) {
      router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginFormGroup.controls.userName.value === 'fengmanadmin'
      && this.loginFormGroup.controls.password.value === 'admin123') {
      localStorage.setItem(LoginComponent.LOGGED_IN, LoginComponent.LOGGED_IN);
      this.router.navigate(['/']);
    } else {
      this.loginFormGroup.controls.userName.setValue('');
      this.loginFormGroup.controls.password.setValue('');
    }
  }
}
