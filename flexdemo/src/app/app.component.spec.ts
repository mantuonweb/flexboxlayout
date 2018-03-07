import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlexModule } from './flex/flex.module'
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let app:any;
  let compiled:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports:[FlexModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    app= fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
