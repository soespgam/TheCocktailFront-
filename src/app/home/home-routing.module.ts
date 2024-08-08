import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home.component';
import { CocktailsApiComponent } from '../cocktail/pages/cocktails-api/cocktails-api.component';
import { CocktailDetaillsComponent } from '../cocktail/pages/cocktail-detaills/cocktail-detaills.component';
import { CocktailsBdComponent } from '../cocktail/pages/cocktails-bd/cocktails-bd.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'CocktailsApi',
    component: CocktailsApiComponent,
  },
  {
    path: 'CocktailsBd',
    component: CocktailsBdComponent,
  },
  {
    path: 'CocktailDetail/:id',
    component: CocktailDetaillsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
