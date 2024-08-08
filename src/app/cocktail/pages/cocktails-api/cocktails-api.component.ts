import { Component } from '@angular/core';
import { ResponseApi2 } from '../../interface/cocktail.interface';
import { CocktailsService } from '../../cocktails.service';
import { RedirectService } from 'src/app/shared/services/redirect.service';
import { LogoutServiceService } from 'src/app/shared/services/logout-service.service';

@Component({
  selector: 'app-cocktails-api',
  templateUrl: './cocktails-api.component.html',
  styleUrls: ['./cocktails-api.component.scss']
})
export class CocktailsApiComponent {
  public abc:string[];
  public letra:any;
  public listCocktailsApiByLetter: ResponseApi2[];
  
  constructor(public cocktailsService: CocktailsService, public redirect: RedirectService, public logout: LogoutServiceService) {
    this.listCocktailsApiByLetter = [];
    this.abc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    this.letra = "";
  }
  public getCocktailsApi(letter: any): void {
    this.letra = letter.target.value;
    this.cocktailsService.getCocktailsApi(letter.target.value).subscribe({
      next: (value: any) => {
        this.listCocktailsApiByLetter = value.drinks;
      },
      error: (err: any) => {
        console.log("ERR GET COM", err)
        alert('Error al traer los cocteles desde api')
      }
    }
    );
  }
}
