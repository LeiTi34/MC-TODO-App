import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBoardsMobileComponent } from './nav-boards-mobile.component';

describe('NavBoardsMobileComponent', () => {
  let component: NavBoardsMobileComponent;
  let fixture: ComponentFixture<NavBoardsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBoardsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBoardsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
