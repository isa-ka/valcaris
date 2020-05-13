import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-frene',
  templateUrl: './frene.component.html',
  styleUrls: ['./frene.component.scss'],
    animations: [
      trigger('myInsertRemoveTrigger', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('100ms', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          animate('100ms', style({ opacity: 0 }))
        ]),
      ])
    ]
  })
export class FreneComponent implements OnInit {
    assets = [1, 2, 3, 4, 5, 6, 7].map((i) => `/assets/frene/frene${i}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }
  isShown:boolean;
  interval :any;
  speed: number = 2000;

  ngOnInit() {
  }
  

}

