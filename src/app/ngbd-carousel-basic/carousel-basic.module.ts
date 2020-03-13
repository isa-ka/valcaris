import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCarouselBasicComponent],
  exports: [NgbdCarouselBasicComponent],
  bootstrap: [NgbdCarouselBasicComponent]
})
export class NgbdCarouselBasicModule { }
