import { Injectable } from '@angular/core';
import { ResponseLogin } from '../login/interface/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cocktail, ResponseApi1, ResponseApi2 } from './interface/cocktail.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
 
  public userStorage: ResponseLogin = JSON.parse(
    sessionStorage.getItem('auth')!
  );

  public headers = new HttpHeaders()
    .set("Authorization", 'Bearer ' + this.userStorage.access_token)
    .set("Access-Control-Allow-Origin", "*")
    .set('Content-Type', 'application/json')

  constructor( public http: HttpClient){}

  public getCocktailsApi(letter: string):Observable<ResponseApi2[]>{
    return this.http.get<ResponseApi2[]>(`${environment.baseUrl}${environment.httpUrls.cocktail.getCocktailsByLetter(letter)}`,
      {
        headers: this.headers
      });
  }

  public getCocktailsApiById(id: number):Observable<ResponseApi1[]>{
    return this.http.get<ResponseApi1[]>(`${environment.baseUrl}${environment.httpUrls.cocktail.getCocktailsApiById(id)}`,
      {
        headers: this.headers
      });
  }

  public guardarCocktaliBD(newCocktail:Cocktail):Observable<Cocktail>{
    return this.http.post<Cocktail>(`${environment.baseUrl}${environment.httpUrls.cocktail.create}`, newCocktail,
      {
        headers: this.headers
      });
  }

  //BD

  public getCocktailsBD(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(`${environment.baseUrl}${environment.httpUrls.cocktail.getCocktails}`,
      {
        headers: this.headers
      }
    );
  }

  public deleteCocktailsBD(id: number): Observable<Cocktail> {
    return this.http.delete<Cocktail>(`${environment.baseUrl}${environment.httpUrls.cocktail.delete(id)}`,
      {
        headers: this.headers
      });
  }
 

}
