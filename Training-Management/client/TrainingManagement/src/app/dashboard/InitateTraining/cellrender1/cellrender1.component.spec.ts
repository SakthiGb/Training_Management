import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cellrender1Component } from './cellrender1.component';

describe('Cellrender1Component', () => {
  let component: Cellrender1Component;
  let fixture: ComponentFixture<Cellrender1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cellrender1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cellrender1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
