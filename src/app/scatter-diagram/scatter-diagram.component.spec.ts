import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterDiagramComponent } from './scatter-diagram.component';

describe('ScatterDiagramComponent', () => {
  let component: ScatterDiagramComponent;
  let fixture: ComponentFixture<ScatterDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
