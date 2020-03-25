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
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasicModule } from "./component/ngbd-carousel-basic/carousel-basic.module";
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TarifsComponent,
    FayardComponent,
    FreneComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    NgbModule,
    NgbdCarouselBasicModule,
    MatTableModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
