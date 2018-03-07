import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnreverseComponent } from './columnreverse.component';

describe('ColumnreverseComponent', () => {
  let component: ColumnreverseComponent;
  let fixture: ComponentFixture<ColumnreverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnreverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
