import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreneComponent } from './frene.component';

describe('FreneComponent', () => {
  let component: FreneComponent;
  let fixture: ComponentFixture<FreneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
