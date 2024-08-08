import { Component } from '@angular/core';
import { LogoutServiceService } from 'src/app/shared/services/logout-service.service';
import { RedirectService } from 'src/app/shared/services/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})  
export class HomeComponent {
 

  constructor( public logout: LogoutServiceService,public redirect: RedirectService,) {

  }

  public ngOnInit(): void {
  }

}
