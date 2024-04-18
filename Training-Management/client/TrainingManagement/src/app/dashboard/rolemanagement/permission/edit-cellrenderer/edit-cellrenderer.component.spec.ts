import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellrendererComponent } from './edit-cellrenderer.component';

describe('EditCellrendererComponent', () => {
  let component: EditCellrendererComponent;
  let fixture: ComponentFixture<EditCellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
