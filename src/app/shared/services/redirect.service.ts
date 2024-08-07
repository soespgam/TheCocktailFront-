import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  constructor(private router: Router) { }

  public redirect(url: string): void {
    this.router.navigate([url]);
  }
  public redirectWithParams(url: string, params: any): void {
    this.router.navigate([url], {
      replaceUrl: true,
      queryParams: params
    });
  }

}
