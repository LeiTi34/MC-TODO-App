import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBackendComponent } from './panel-backend.component';

describe('PanelBackendComponent', () => {
  let component: PanelBackendComponent;
  let fixture: ComponentFixture<PanelBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
