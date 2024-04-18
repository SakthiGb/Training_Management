import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasterTrainingComponent } from './add-master-training.component';

describe('AddMasterTrainingComponent', () => {
  let component: AddMasterTrainingComponent;
  let fixture: ComponentFixture<AddMasterTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMasterTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMasterTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
