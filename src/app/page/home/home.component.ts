import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { HomeService } from "src/app/home.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('2000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
  ],
})
export class HomeComponent implements OnInit {
  state = 'hide'
  scrollPosition: number = window.pageYOffset;
  innerWidth : number;
  desktopSize : boolean = true;
  mobileSize: boolean = false;
  random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => `/assets/random/random${i}.jpg`);

  
  constructor(public el: ElementRef, private homeService: HomeService, config: NgbCarouselConfig) {
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }
  
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }
    else {
      this.state = 'hide'
    }; 
  };
  onMouseEnter(){
    this.homeService.onMouseEnter();
  };
  onMouseLeave(){
    this.homeService.onMouseLeave();
  };

  @HostListener("window:resize", ['$event'])

  onResize(){
    this.innerWidth = window.innerWidth;
    if (innerWidth <= 990 ) {
      this.desktopSize = false;
      this.mobileSize = true;      
    }else{
      this.desktopSize = true;
      this.mobileSize = false;
    }
  }
}
