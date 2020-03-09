import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { HomeService } from "src/app/home.service";
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


  constructor(public el: ElementRef, private homeService:HomeService) { }

  ngOnInit() {
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
  }
  onMouseLeave(){
    this.homeService.onMouseLeave();
  }

}
