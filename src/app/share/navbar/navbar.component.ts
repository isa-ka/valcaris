import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  upArrow: boolean = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition)
    if (scrollPosition >= 990) {
      this.upArrow = true;
      console.log(this.upArrow)
    } else {
      this.upArrow = false;
    }
  };
}
