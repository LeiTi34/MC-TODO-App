import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBoardsComponent } from './mobile-boards.component';

describe('MobileBoardsComponent', () => {
  let component: MobileBoardsComponent;
  let fixture: ComponentFixture<MobileBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBoardsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
