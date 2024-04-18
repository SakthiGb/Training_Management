import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCellrendererComponent } from './read-cellrenderer.component';

describe('ReadCellrendererComponent', () => {
  let component: ReadCellrendererComponent;
  let fixture: ComponentFixture<ReadCellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
