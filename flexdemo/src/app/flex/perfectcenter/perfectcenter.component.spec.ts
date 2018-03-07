import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectcenterComponent } from './perfectcenter.component';

describe('PerfectcenterComponent', () => {
  let component: PerfectcenterComponent;
  let fixture: ComponentFixture<PerfectcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
