import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';



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
  isShown:boolean
  interval :any;
  speed: number = 2000;
  private stateGrow: string = "inactive"; 
  constructor( ) { }

  ngOnInit() {
    this.isShown= false;
  }
  

}

