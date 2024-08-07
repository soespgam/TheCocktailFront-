import { Component } from '@angular/core';
import { LogoutServiceService } from '../../services/logout-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public logOut: LogoutServiceService){}

}
