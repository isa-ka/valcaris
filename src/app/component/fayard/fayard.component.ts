import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fayard',
  templateUrl: './fayard.component.html',
  styleUrls: ['./fayard.component.scss']
})
export class FayardComponent implements OnInit {
  fayard = [1, 2, 3, 4, 5, 6,  8, 9,11].map((i) => `/assets/fayard/fayard${i}.jpg`);

 constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }


  ngOnInit() {
  }

}
