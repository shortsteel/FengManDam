import {Component} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  title = 'FengManDam';

  logOut(): void {
    localStorage.removeItem(LoginComponent.LOGGED_IN);
  }
}
