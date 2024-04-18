import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellrenderComponent } from './cellrender.component';

describe('CellrenderComponent', () => {
  let component: CellrenderComponent;
  let fixture: ComponentFixture<CellrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
