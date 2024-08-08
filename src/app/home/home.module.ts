import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CocktailsApiComponent } from '../cocktail/pages/cocktails-api/cocktails-api.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CocktailsApiComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent,CocktailsApiComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
