import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsApiComponent } from '../cocktail/pages/cocktails-api/cocktails-api.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CocktailsBdComponent } from '../cocktail/pages/cocktails-bd/cocktails-bd.component';


@NgModule({
  declarations: [
    HomeComponent,
    CocktailsApiComponent,
    NavbarComponent,
    CocktailsBdComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  exports: [
    CocktailsApiComponent,
    NavbarComponent,
    CocktailsBdComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
