import { Injectable, Component, HostListener } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class HomeService {
  showInfo: boolean = false;
  changeOfState: number;
  innerWidth: number;
  screenSize: boolean = true;
  constructor() { }

  onMouseEnter() {
    this.showInfo = true;
    this.changeOfState = 0.2;
  };
  onMouseLeave() {
    this.showInfo = false;
    this.changeOfState = 1;
  }

}
