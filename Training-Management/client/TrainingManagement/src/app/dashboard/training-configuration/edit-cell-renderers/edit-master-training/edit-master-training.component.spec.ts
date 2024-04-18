import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasterTrainingComponent } from './edit-master-training.component';

describe('EditMasterTrainingComponent', () => {
  let component: EditMasterTrainingComponent;
  let fixture: ComponentFixture<EditMasterTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMasterTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMasterTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
