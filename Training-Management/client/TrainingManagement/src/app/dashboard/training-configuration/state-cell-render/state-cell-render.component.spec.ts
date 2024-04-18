import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCellRenderComponent } from './state-cell-render.component';

describe('StateCellRenderComponent', () => {
  let component: StateCellRenderComponent;
  let fixture: ComponentFixture<StateCellRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateCellRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
