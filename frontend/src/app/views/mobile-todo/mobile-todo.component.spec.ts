import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTodoComponent } from './mobile-todo.component';

describe('MobileTodoComponent', () => {
  let component: MobileTodoComponent;
  let fixture: ComponentFixture<MobileTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
