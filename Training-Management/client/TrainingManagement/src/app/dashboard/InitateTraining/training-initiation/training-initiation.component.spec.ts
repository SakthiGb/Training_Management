import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingInitiationComponent } from './training-initiation.component';

describe('TrainingInitiationComponent', () => {
  let component: TrainingInitiationComponent;
  let fixture: ComponentFixture<TrainingInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingInitiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
