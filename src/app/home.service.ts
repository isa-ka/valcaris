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
    console.log(this.showInfo)
  };
  onMouseLeave() {
    this.showInfo = false;
    this.changeOfState = 1;
    console.log(this.showInfo)
  }

}
