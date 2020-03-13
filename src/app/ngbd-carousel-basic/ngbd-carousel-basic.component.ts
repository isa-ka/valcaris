import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.scss']
})
export class NgbdCarouselBasicComponent implements OnInit {
  assets = [1, 2, 3, 4, 5, 6, 7].map((i) => `/assets/frene/frene${i}.jpg`);
  fayard = [1, 2, 3, 4, 5, 6, 7].map((i) => `/assets/fayard/fayard${i}.jpg`);
 
  constructor(config: NgbCarouselConfig) {
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}
