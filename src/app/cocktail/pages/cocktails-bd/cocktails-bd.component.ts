import { Component } from '@angular/core';
import { Cocktail } from '../../interface/cocktail.interface';
import { CocktailsService } from '../../cocktails.service';
import { RedirectService } from 'src/app/shared/services/redirect.service';
import { LogoutServiceService } from 'src/app/shared/services/logout-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cocktails-bd',
  templateUrl: './cocktails-bd.component.html',
  styleUrls: ['./cocktails-bd.component.scss']
})
export class CocktailsBdComponent {
  public listCocktailsBd: Cocktail[];
  
  constructor(public cocktailsService: CocktailsService, public redirect: RedirectService, public logout: LogoutServiceService) {
    this.listCocktailsBd = [];
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
