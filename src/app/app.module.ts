import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {GoogleMapsModule} from 'google-maps-angular2';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



import { routing } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    GoogleMapsModule.forRoot({
      url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyC28ORe_2whBFQfSaLB7Kxe4FCoAiCQc5g'
  }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
