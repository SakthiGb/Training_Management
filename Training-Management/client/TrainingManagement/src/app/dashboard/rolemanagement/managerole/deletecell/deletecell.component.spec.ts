import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecellComponent } from './deletecell.component';

describe('DeletecellComponent', () => {
  let component: DeletecellComponent;
  let fixture: ComponentFixture<DeletecellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
