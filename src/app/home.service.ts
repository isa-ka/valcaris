import { Injectable, Component, HostListener } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class HomeService {
  public showInfo: boolean = false;
  public changeOfState: number;
  public innerWidth: number;
  public screenSize: boolean = true;
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
