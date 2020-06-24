import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtodoComponent } from './subtodo.component';

describe('SubtodoComponent', () => {
  let component: SubtodoComponent;
  let fixture: ComponentFixture<SubtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
