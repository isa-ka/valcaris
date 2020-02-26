import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FayardComponent } from './fayard.component';

describe('FayardComponent', () => {
  let component: FayardComponent;
  let fixture: ComponentFixture<FayardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FayardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FayardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
