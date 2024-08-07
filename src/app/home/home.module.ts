import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class HomeModule { }
