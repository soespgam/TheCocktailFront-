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
  }

  public ngOnInit(): void {
    this.getCocktailsApiById(this.idcoctel);
  }

  public getCocktailsApiById(id: any): void {
    this.cocktailsService.getCocktailsApiById(id).subscribe({
      next: (value: any) => {
        console.log("coctel desde api", value.drinks)
        this.listCocktailsApiById = value.drinks;
      },
      error: (err: any) => {
        console.log("ERR GET COM", err)
        alert('Error al traer el detalle del coctel desde api')
      }
    }
    );
  }

  public createBody(): Cocktail {
    return {
        id: this.idcoctel,
        name: this.cocktailValidate.get('id')?.value,
        category: this.cocktailValidate.get('id')?.value,
        image: this.cocktailValidate.get('id')?.value,
        instruccions: this.cocktailValidate.get('id')?.value,
        instruccionsEs: this.cocktailValidate.get('id')?.value,
        instruccionsIt: this.cocktailValidate.get('id')?.value,
        instruccionsFr: this.cocktailValidate.get('id')?.value,
    }
  }

  public saveFavorites(): void {
    this.cocktailsService.guardarCocktaliBD(this.createBody()).subscribe({
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
