import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcellrendererComponent } from './editcellrenderer.component';

describe('EditcellrendererComponent', () => {
  let component: EditcellrendererComponent;
  let fixture: ComponentFixture<EditcellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
