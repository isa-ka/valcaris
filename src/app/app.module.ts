import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './share/navbar/navbar.component';
import { TarifsComponent } from './component/tarifs/tarifs.component';
import { FayardComponent } from './component/fayard/fayard.component';
import { FreneComponent } from './component/frene/frene.component';
import { ContactComponent } from './component/contact/contact.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TarifsComponent,
    FayardComponent,
    FreneComponent,
    ContactComponent,
    CarouselComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    NgxHmCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
