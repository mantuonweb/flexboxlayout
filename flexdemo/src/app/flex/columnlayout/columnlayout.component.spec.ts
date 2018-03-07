import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnlayoutComponent } from './columnlayout.component';

describe('ColumnlayoutComponent', () => {
  let component: ColumnlayoutComponent;
  let fixture: ComponentFixture<ColumnlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
