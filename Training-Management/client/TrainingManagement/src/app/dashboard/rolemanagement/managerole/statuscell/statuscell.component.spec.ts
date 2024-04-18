import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscellComponent } from './statuscell.component';

describe('StatuscellComponent', () => {
  let component: StatuscellComponent;
  let fixture: ComponentFixture<StatuscellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuscellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuscellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
