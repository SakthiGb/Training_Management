import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterConfigurationComponent } from './master-configuration.component';

describe('MasterConfigurationComponent', () => {
  let component: MasterConfigurationComponent;
  let fixture: ComponentFixture<MasterConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
