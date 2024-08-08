import { Component } from '@angular/core';
import { Cocktail } from '../../interface/cocktail.interface';
import { CocktailsService } from '../../cocktails.service';
import { RedirectService } from 'src/app/shared/services/redirect.service';
import { LogoutServiceService } from 'src/app/shared/services/logout-service.service';
import Swal from 'sweetalert2'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktails-bd',
  templateUrl: './cocktails-bd.component.html',
  styleUrls: ['./cocktails-bd.component.scss']
})
export class CocktailsBdComponent {
  public listCocktailsBd: Cocktail[];
  public editCocktailBd: any;
  public idcoctel:any;

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


  constructor(public cocktailsService: CocktailsService, public redirect: RedirectService, public logout: LogoutServiceService) {
    this.listCocktailsBd = [];
    this.editCocktailBd = {
      id:'',
      name: '',
      category: '',
      image: '',
      instruccions: '',
      instruccionsEs: '',
      instruccionsIt: '',
      instruccionsFr: ''
    }
    this.idcoctel=0;
  }

  public ngOnInit(): void {
    this.getCoktailsDb();
  }

  public getCoktailsDb(): void {
    this.cocktailsService.getCocktailsBD().subscribe({
      next: (value: Cocktail[]) => {
        console.log("cocteles desde Bd", value)
        this.listCocktailsBd = value;
      },
      error: (err: any) => {
        console.log("ERR GET COM", err)
        alert('Error al traer los cocteles desde la BD')
      }
    }
    );
  }

  public getCoktail(id: any): void {
    this.idcoctel =id;
    try {
      this.cocktailsService.getCocktailBD(id).subscribe({
        next: (res) => {
          this.editCocktailBd = res;
    console.log("here", this.editCocktailBd )

        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  public updated_coktail(): void {

    let updateCocktail = {
      id: this.idcoctel,
      name: this.cocktailValidate.get('name')?.value,
      category: this.cocktailValidate.get('category')?.value,
      image: this.cocktailValidate.get('image')?.value,
      instruccions: this.cocktailValidate.get('image')?.value,
      instruccionsEs: this.cocktailValidate.get('instruccionsEs')?.value,
      instruccionsIt: this.cocktailValidate.get('instruccionsIt')?.value,
      instruccionsFr: this.cocktailValidate.get('instruccionsFr')?.value,
    };

    if (updateCocktail.name == '' || updateCocktail.name == null) {
      updateCocktail.name  = this.editCocktailBd.name;
    }

    if (updateCocktail.category == '' || updateCocktail.category == null) {
      updateCocktail.category  = this.editCocktailBd.category;
    }

    if (updateCocktail.instruccions == '' || updateCocktail.instruccions == null) {
      updateCocktail.instruccions  = this.editCocktailBd.instruccions;
    }

    if (updateCocktail.instruccionsEs == '' || updateCocktail.instruccionsEs == null) {
      updateCocktail.instruccionsEs  = this.editCocktailBd.instruccionsEs;
    }

    if (updateCocktail.instruccionsIt == '' || updateCocktail.instruccionsIt == null) {
      updateCocktail.instruccionsIt  = this.editCocktailBd.instruccionsIt;
    }

    if (updateCocktail.instruccionsFr == '' || updateCocktail.instruccionsFr == null) {
      updateCocktail.instruccionsFr  = this.editCocktailBd.instruccionsFr;
    }

    if (updateCocktail.image == '' || updateCocktail.image == null) {
      updateCocktail.image  = this.editCocktailBd.image;
    }

    try {
      this.cocktailsService.edit_Cocktail(updateCocktail).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "coctel Actualizado ",
          });
          this.getCoktailsDb();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  public deleteCocktailBD(id: number): void {
    this.cocktailsService.deleteCocktailsBD(id).subscribe(
      {
        next: () => {
          Swal.fire({
            icon: "success",
            title: "se elimino correctamente el coctel",
            showConfirmButton: false,
            timer: 1500
          });
          this.getCoktailsDb();
        },
        error: (err: any) => {
          console.log("ERR DEl COM", err)
          alert('Error al eliminar el coctel')
        }
      }
    );
  }

}
