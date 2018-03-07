import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionrowreverseComponent } from './directionrowreverse.component';

describe('DirectionrowreverseComponent', () => {
  let component: DirectionrowreverseComponent;
  let fixture: ComponentFixture<DirectionrowreverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionrowreverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionrowreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
