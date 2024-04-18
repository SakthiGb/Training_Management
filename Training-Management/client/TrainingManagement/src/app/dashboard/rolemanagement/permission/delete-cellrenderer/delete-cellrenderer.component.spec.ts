import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCellrendererComponent } from './delete-cellrenderer.component';

describe('DeleteCellrendererComponent', () => {
  let component: DeleteCellrendererComponent;
  let fixture: ComponentFixture<DeleteCellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
