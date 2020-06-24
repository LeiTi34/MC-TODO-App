import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDetailMobileComponent } from './nav-detail-mobile.component';

describe('NavDetailMobileComponent', () => {
  let component: NavDetailMobileComponent;
  let fixture: ComponentFixture<NavDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavDetailMobileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
