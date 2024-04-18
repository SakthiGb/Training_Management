import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatetrainingComponent } from './initiatetraining.component';

describe('InitiatetrainingComponent', () => {
  let component: InitiatetrainingComponent;
  let fixture: ComponentFixture<InitiatetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiatetrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiatetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
