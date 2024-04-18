import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCellrendererComponent } from './add-cellrenderer.component';

describe('AddCellrendererComponent', () => {
  let component: AddCellrendererComponent;
  let fixture: ComponentFixture<AddCellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
