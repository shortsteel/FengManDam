import {Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router) {
    if (LoginComponent.isLoggedIn()) {
      router.navigate(['App']);
    } else {
      router.navigate(['LogIn']);
    }
  }
}
