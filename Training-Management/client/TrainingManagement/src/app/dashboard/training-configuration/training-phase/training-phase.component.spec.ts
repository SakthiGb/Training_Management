import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPhaseComponent } from './training-phase.component';

describe('TrainingPhaseComponent', () => {
  let component: TrainingPhaseComponent;
  let fixture: ComponentFixture<TrainingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
