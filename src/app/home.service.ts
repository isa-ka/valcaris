import { Injectable, Component } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class HomeService {
  showInfo: boolean = false;
  changeOfState: number;

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
