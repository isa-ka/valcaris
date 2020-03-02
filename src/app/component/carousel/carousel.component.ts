import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  index = 0;
  speed = 4000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    console.log(i)
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `/assets/random${i}.jpg`,
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
