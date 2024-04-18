import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlandetailComponent } from './edit-plandetail.component';

describe('EditPlandetailComponent', () => {
  let component: EditPlandetailComponent;
  let fixture: ComponentFixture<EditPlandetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlandetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
