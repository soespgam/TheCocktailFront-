import { Component } from '@angular/core';
import { CocktailsService } from '../../cocktails.service';
import { RedirectService } from 'src/app/shared/services/redirect.service';
import { LogoutServiceService } from 'src/app/shared/services/logout-service.service';
import { Cocktail, ResponseApi1 } from '../../interface/cocktail.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cocktail-detaills',
  templateUrl: './cocktail-detaills.component.html',
  styleUrls: ['./cocktail-detaills.component.scss']
})
export class CocktailDetaillsComponent {
  public listCocktailsApiById: ResponseApi1[];
  private idcoctel: any;
  public cocktailFavorite: any;

  public cocktailValidate: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    instruccions: new FormControl('', [Validators.required]),
    instruccionsEs: new FormControl(''),
    instruccionsIt: new FormControl(''),
    instruccionsFr: new FormControl('')
  });


  constructor(public cocktailsService: CocktailsService, public redirect: RedirectService, public logout: LogoutServiceService, private route: ActivatedRoute) {
    this.listCocktailsApiById = [];
    this.idcoctel = 0;
    this.route.params.subscribe(params => this.idcoctel = params['id']);
    this.cocktailFavorite = [];
  }

  public ngOnInit(): void {
    this.getCocktailsApiById(this.idcoctel);
  }

  public getCocktailsApiById(id: any): void {
    this.cocktailsService.getCocktailsApiById(id).subscribe({
      next: (value: any) => {
        console.log("coctel desde api", value.drinks)
        this.listCocktailsApiById = value.drinks;

        for (let data of this.listCocktailsApiById) {
          this.cocktailFavorite = data;
        }
      },
      error: (err: any) => {
        console.log("ERR GET COM", err)
        alert('Error al traer el detalle del coctel desde api')
      }
    }
    );
  }


  public saveFavorites(): void {
    let cocktailFavorite = {
      id: this.cocktailFavorite.idDrink,
      name: this.cocktailFavorite.strDrink,
      category: this.cocktailFavorite.strCategory,
      image: this.cocktailFavorite.strDrinkThumb,
      instruccions: this.cocktailFavorite.strInstructions,
      instruccionsEs: this.cocktailFavorite.strInstructionsES,
      instruccionsIt: this.cocktailFavorite.strInstructionsIT,
      instruccionsFr: this.cocktailFavorite.strInstructionsFR,
    }

    
        this.cocktailsService.guardarCocktaliBD(cocktailFavorite).subscribe({
          next:()=>{
            Swal.fire({
              icon: "success",
              title: "Seguardo Correctamente el coctel en Favoritos",
              showConfirmButton: false,
              timer: 1500
            });
            this.redirect.redirect('/home/home');
          },
          error: (err: any) => {
            console.log("ERR GET COM", err)
            alert('Error al guardar el coctel en Favoritos')
          }
        }
        );
  }
}
