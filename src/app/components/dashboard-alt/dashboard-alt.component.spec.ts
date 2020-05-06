import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAltComponent } from './dashboard-alt.component';

describe('DashboardAltComponent', () => {
  let component: DashboardAltComponent;
  let fixture: ComponentFixture<DashboardAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
