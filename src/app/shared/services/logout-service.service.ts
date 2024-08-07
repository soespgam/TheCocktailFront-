import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedirectService } from './redirect.service';
import { Login } from 'src/app/login/interface/login.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {
  constructor(public http: HttpClient, public redirect: RedirectService) { }

  public logouth(): Observable<Login> {
    sessionStorage.clear();
    this.redirect.redirect('/')
    return this.http.get<Login>(`${environment.baseUrl}${environment.httpUrls.login.logout}`)
  }
}
